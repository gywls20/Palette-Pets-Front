// eslint-disable-next-line no-unused-vars
import React from 'react';
import AutoSlideImgComp from './AutoSlideImgComp';
import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import PetCategoryComp from '../PetCategoryComp'
import BoardView from './BoardView';
import MainCarrotView from './MainCarrotView';
import Banner from './Banner';
import { Link } from 'react-router-dom';


const BoardViewComp = () => {
    
    return (
        <>
            <AutoSlideImgComp/>
            <br/>
            {/* <PetCategoryComp/>·////             */}
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>오늘의 인기글</span>
                </div>
                <BoardView/>

                <hr></hr>

                <Banner/>

                <hr></hr>

                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>최신 거래글</span>
                    <Link to={{ pathname: '/recent', search: '?sort=articleId' }}>
                        <button className={BoardViewStyle.postsMore}>더보기</button>
                    </Link>
                </div>
                <MainCarrotView/>

            </div>
        </>
    );
};

export default BoardViewComp;