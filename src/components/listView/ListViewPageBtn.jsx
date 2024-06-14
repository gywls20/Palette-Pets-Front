import React, {useEffect, createContext, useReducer, useMemo} from 'react';
import "../../styles/board/BoardList.css"
import Category from "../CategoryComp.jsx";
import ArticleService from '../../service/ArticleService.jsx';
import {url} from '../../utils/single.js';
// import PageButton from './PageBtnComp.jsx';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const ArticleListStates = createContext({ 
  // 페이지 번호와 상태 공유
  len : [1,2,3,4,5],
  pages : 1,
  dispatch : () =>{},
})

const initialState = { //초기값을 객체로 넣어준다.
  articles : [],
  page : 1,
  countArticle : -1,
  len : [1,2,3,4,5],
  sort : "articleId",
  where : "",
  dir : true,
  dispatch : () => {},
}
const getLenArray = (e,countArticle) =>{
  if(e>=countArticle){
      return [countArticle - 2, countArticle - 1, countArticle];
  }
  if(e === countArticle -1){
      return [countArticle -3,countArticle -2, countArticle -1, countArticle];
  }
  if(e===1){
      return [e,e+1,e+2,e+3,e+4];
  }
  if(e===2){
      return [e-1,e,e+1,e+2,e+3];
  }
  return [e-2, e-1, e, e+1, e+2];
}
export const ClickBtn = 'ClickBtn';
export const CountList = 'CountList';
export const SetSort = 'SetSort';
export const SetList = 'SetList';

const reducer = (state,action) => {
  const {countArticle, articles} = state;
  switch(action.type){ //action의 type: 이 어떤 값인지 확인
      case ClickBtn :
          const e = parseInt(action.btnVal,10);
          console.log("e : ",e);
          console.log("action.e : ",action.btnVal);
          return{
              ...state,
              page : e,
              len : getLenArray(e,countArticle),
          }
      case CountList:
          return{
              ...state,
              countArticle : action.countArticle
          };
      case SetSort:
          return{
              ...state,
              sort : action.sort,
              page : 1,
              len : [1,2,3,4,5],
          };
      case SetList:
          return{
            ...state,
            articles : action.articles,
            len : getLenArray(1,countArticle),
            countArticle : action.countArticle,
          };
      default:
          return;
  }
}

function ListViewComp() {
    //URL에서 sort 값 가져오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sortParam = queryParams.get("sort");

    const [state, dispatch] = useReducer(reducer, initialState); //3번째 인자는 Lazy기능을 하는데 보통 사용하지 않음
    const {articles, page, sort, dir, where, countArticle, len} = state;

    const value = useMemo(()=>({dispatch, page : page, len : len, articles: articles}), [page]);
    const MaxLen = 10;


    //초기화 설정
    useEffect(() => {
      axios.get(`${url}/article/listCount?where=${where}`).then((res) => {
        console.log("length : ",res)
        dispatch({type: CountList, countArticle: Math.ceil(res.data/MaxLen)});
    }).catch(error => {
        console.error("Error fetching articles:", error);
    });
      fetchArticles();
    }, [page]); // 페이지가 로드될 때 한 번만 실행

    useEffect(() => {
        dispatch({type: SetSort, sort: sortParam, articles: []}); // 초기화
    }, [sortParam]);
  
    const fetchArticles = () => {
      ArticleService.getArticleList(page, sort, dir, where).then((res) => {
        dispatch({type: SetList, articles: res.data, countArticle: Math.ceil(res.data/MaxLen)});
  
        // setArticles(prevArticles => [...prevArticles, ...res.data]);  기존 배열에 값을 더해 추가  
        console.log("articles : ",articles);
        console.log("countArticle : ",countArticle);
        console.log("page : ",page);
        console.log("len : ",len);
        console.log("dir : ",dir);
        console.log("=============================================================================");
      }).catch(error => {
        console.error("Error fetching articles:", error);
      });
      
    };
  
    // const handleScroll = () => {
    //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
    //   fetchArticles();
    // };

  
    return (
    <ArticleListStates.Provider value={value}>
        <div className='header'>
            <Category/>
        </div>
        <hr/>
        <main className="container mx-auto px-4 py-4">
            {
                articles.map(articles =>
                         <div className="post" key= {articles.articleId}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="post-meta">글 제목 :  {articles.title}</div>
                                    <div className="post-meta">{articles.createdWho} • {articles.createdAt} • {articles.countLoves} • {articles.countViews}</div>
                                </div>
                                <div className="post-comments">{articles.articleId}</div>
                            </div>
                        </div>
                    )
                }
        </main>
        {/* <PageButton /> */}
      </ArticleListStates.Provider>
    );
};

// export default ListViewComp;