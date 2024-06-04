// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import "../../styles/board/BoardList.css"
import Category from "../CategoryComp.jsx";
import ArticleService from '../../service/ArticleService.jsx';
import { useLocation } from 'react-router-dom';


function BoardPageComp({ search }) {
    //URL에서 sort 값 가져오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sortParam = queryParams.get("sort");

    //초기화 설정
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(sortParam); 
    //const [sort, setSort] = useState(sortParam || 'articleId'); 
    const [dir, setDir] = useState(true); //오름차순
    const [where, setWhere] = useState('');
    const [hasMore, setHasMore] = useState(true); // 추가 데이터를 불러올 수 있는지 여부(스크롤 사용)
    const [ref, inView] = useInView();
 
    useEffect(() => {
      console.log("board page search changed = "+ search);
      setWhere(search);
      console.log("search :::::",search)
      fetchArticles();
    }, [search])

    useEffect(() => {
      if (sortParam) {
            setSort(sortParam); // 쿼리 파라미터에서 sort 값을 읽어 설정
            setArticles([]);
            setPage(1);
            setHasMore(true);
        };
    }, [sortParam]);

    const fetchArticles = () => {
      ArticleService.getArticleList(page, sort, dir, where).then((res) => {
        console.log("where =" + where);
          setArticles(articles => [...articles, ...(res.data)]);
          setPage(page => page + 1);
      })
        .catch((err) => {console.log(err)});
    };

    useEffect(() => {
      // inView가 true 일때만 실행한다.
      if (inView) {
      console.log(inView)
      
      fetchArticles();
        }
      }, [inView]);

    return (
    <>
        <div className='header'>
            <Category/>
        </div>
        <hr/>
        <main className="container mx-auto px-4 py-4">
            {
                articles.map(articles =>
                         <div className="post" >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="post-title text-red-500">{articles.title}</div>
                                    <div>{articles.content}</div>
                                    <div className="post-meta">{articles.createdWho} • {articles.createdAt} • {articles.countLoves} • {articles.countViews}</div>
                                </div>
                                <div className="post-comments">{articles.articleId}</div>
                            </div>
                        </div>
                    )
                }
                <div ref={ref}>dnn</div>
        </main>
      </>
    );
};

export default BoardPageComp;