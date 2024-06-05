// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import "../../styles/board/BoardList.css"
import Category from "../PetCategoryComp.jsx";
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
    const [where, setWhere] = useState(""); //검색
    const [ref, inView] = useInView();
 
    useEffect(() => {
      console.log("board page search changed = "+ search);
      setWhere(search);
      setPage(1); // search 값이 들어오면 페이지를 1로 초기화(Page = 1일 때만 조회가 되기 때문)
      setArticles([]); // articles를 초기화
      fetchArticles(true);
    }, [search, sort])

    useEffect(() => {
      if (sortParam) {
            setSort(sortParam); // 쿼리 파라미터에서 sort 값을 읽어 설정
            setArticles([]);
            setPage(1);
        };
    }, [sortParam]);

    const fetchArticles = (reset = false) => {
      const pageToFetch = reset ? 1 : page;
      ArticleService.getArticleList(pageToFetch, sort, dir, search).then((res) => {
        console.log("where =@!@!@!@!@" + search);
        console.log(res);
          setArticles(articles => reset ? res.data : [...articles, ...(res.data)]);
          //setPage(page => page + 1);
          setPage(page => pageToFetch + 1);
      })
        .catch((err) => {console.log(err)});
    };

    //무한 페이징
    useEffect(() => {
      // inView가 true 일때만 실행한다.
      if (inView && page > 1) {
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
                <div ref={ref}>끝</div>
        </main>
      </>
    );
};

export default BoardPageComp;