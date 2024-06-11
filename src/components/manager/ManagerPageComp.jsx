// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import "../../styles/board/BoardList.css"
import Category from "../PetCategoryComp.jsx";
import ArticleService from '../../service/ArticleService.jsx';
import { useLocation } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import "../../styles/managerPage/ManagerPage.css";
import ArticleService from "../../service/ArticleService.jsx";


function ManagerPageComp() {
    //URL에서 sort 값 가져오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sortParam = queryParams.get("sort");

    //초기화 설정
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    //const [sort, setSort] = useState(sortParam); 
    const [sort, setSort] = useState(sortParam || 'articleId'); 
    const [dir, setDir] = useState(true); //오름차순
    const [where, setWhere] = useState('');
    const [hasMore, setHasMore] = useState(true); // 추가 데이터를 불러올 수 있는지 여부(스크롤 사용)
  
    useEffect(() => {
      fetchArticles();
      // 스크롤 이벤트 리스너 등록
      window.addEventListener('scroll', handleScroll);
      return () => {
        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        window.removeEventListener('scroll', handleScroll);
      };
      
    }, []); // 페이지가 로드될 때 한 번만 실행

    useEffect(() => {
      if (sortParam) {
            setSort(sortParam); // 쿼리 파라미터에서 sort 값을 읽어 설정
            setArticles([]);
            setPage(1);
            setHasMore(true);
        };
    }, [sortParam]);
  
    const fetchArticles = () => {
      if (!hasMore) return;
      ArticleService.getArticleList(page, sort, dir, where).then((res) => {
        //console.log("where =" + where);
        if (res.data.length > 0) {
          setArticles(prevArticles => [...prevArticles, ...res.data]);
          setPage(prevPage => prevPage + 1);
          //console.log("where =" + where);
        } else {
          setHasMore(false);
        }
      }).catch(error => {
        console.error("Error fetching articles:", error);
      });
    };
  
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
      fetchArticles();
    };

  
    return (
    <>
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
                                    <div className="post-title text-red-500">{articles.title}</div>
                                    <div>{articles.content}</div>
                                    <div className="post-meta">{articles.createdWho} • {articles.createdAt} • {articles.countLoves} • {articles.countViews}</div>
                                </div>
                                <div className="post-comments">{articles.articleId}</div>
                            </div>
                        </div>
                    )
                }
        </main>
      </>
    );
};

export default ManagerPageComp;