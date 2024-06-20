// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import "../../styles/manager/BoardList.css"
import Category from "../../test/main/Category.jsx";
import axios from 'axios';

const ManagerPageComp = () => {
    const [articleList, setArticleList] = useState([]);

    const getarticleList = async () => {
        const resp = await (await axios.get('//localhost:8080/api/test/querydsl')).data; //목록 데이터에 할당
        setArticleList(resp.data); //articleList 변수에 할당
        console.log(articleList);
    }

    useEffect(() => {
        getarticleList(); //목록 조회 함수 호출
    }, []);

    return (
    <>
        <div className='header'>
            <PetCategoryComp/>
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