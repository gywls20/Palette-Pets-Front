import React from 'react';
import "../../styles/mainPage/update.css";

const UpdateComp = () => {
    return (
        <div className={'notice'}>
            <h3>냥가왈부 업데이트</h3>
            <div className={'updateList'}>
                <div className="upL">
                    <a className="upList" href="https://www.fordong.co.kr/board/post/127300">
                    <span className="upL1">첫번째 업데이트🐶</span></a>
                    <hr className="updateHr"/>
                    <a className="upList" href="https://www.fordong.co.kr/board/post/127281">
                        <span className="upL2">두번째 업데이트🐶</span></a>
                    <hr className="updateHr"/>
                    <a className="upList" href="https://www.fordong.co.kr/board/post/125930">
                        <span className="upL3">세번째 업데이트🐶</span></a>
                    <hr className="updateHr"/>
                    <a className="upList" href="https://www.fordong.co.kr/board/post/124663">
                        <span className="upL4">네번째 업데이트🐶</span></a>
                    <hr className="updateHr"/>
                    <a className="upList" href="https://www.fordong.co.kr/board/post/124476">
                        <span className="upL5">다섯번째 업데이트🐶</span></a>
                    <hr className="updateHr"/>
                </div>
                <button className={"updateButton"}>더보기</button>
            </div>
        </div>
    );
};

export default UpdateComp;