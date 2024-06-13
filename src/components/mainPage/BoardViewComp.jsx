// eslint-disable-next-line no-unused-vars
import React from 'react';
import AutoSlideImgComp from './AutoSlideImgComp';
import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import PetCategoryComp from '../PetCategoryComp'
import BoardView from './BoardView';

const BoardViewComp = () => {
    
    return (
        <>
            <AutoSlideImgComp/>
            <br/>
            <PetCategoryComp/>            
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>오늘의 인기글</span>
                    <button className={BoardViewStyle.postsMore}>더보기</button>
                </div>
                <BoardView/>

            </div>
        </>
    );
};

export default BoardViewComp;