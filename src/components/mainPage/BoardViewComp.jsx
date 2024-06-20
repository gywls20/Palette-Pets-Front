// eslint-disable-next-line no-unused-vars
import React from 'react';
import AutoSlideImgComp from './AutoSlideImgComp';
import BoardViewStyle from '../../styles/mainPage/boardView.module.css'
import BoardView from './BoardView';

const BoardViewComp = () => {
    
    return (
        <>
            <AutoSlideImgComp/>
            <br/>
            
            <div className={BoardViewStyle.postsSection}>
                <div className={BoardViewStyle.postsHeader}>
                    <span className={BoardViewStyle.postsTitle}>인기글</span>
                </div>
                <BoardView/>
            </div>
        </>
    );
};

export default BoardViewComp;