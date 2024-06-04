import React, {useCallback, useContext, memo} from "react";
import {ArticleListStates, ClickBtn} from "./ListViewComp.jsx";


const PageButton = memo(() =>{
    console.log("PageButton rendering...");
    const {dispatch ,len} = useContext(ArticleListStates);
    const onClickPageBtn = useCallback((e)=> ()=>{
        console.log("clickBtn");
        console.log("e.target.value : ",e);
        dispatch({type : ClickBtn, btnVal:e});
    },[]);
    return (
        <span className="pagingBtn">
        {len.map((v, i) => (
            <button key={i} onClick={onClickPageBtn(v)}>{v}</button>
        ))}
        </span>
    );
});
export default PageButton;