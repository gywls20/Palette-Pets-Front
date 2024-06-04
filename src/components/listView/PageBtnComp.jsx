import React, {useCallback, useContext, memo} from "react";
import {ArticleListStates, ClickBtn, SetLast} from "./ListViewComp.jsx";


const PageButton = memo(() =>{
    console.log("PageButton rendering...");
    const {dispatch ,len} = useContext(ArticleListStates);
    const onClickPageBtn = useCallback((e)=> ()=>{
        console.log("clickBtn");
        console.log("e.target.value : ",e);
        console.log("e : ",e);
        dispatch({type : ClickBtn, btnVal:e});
    },[]);
    const onClickLastPageBtn = useCallback(()=> ()=>{
        console.log("clickBtn");
        dispatch({type : SetLast});
    },[]);
    return (
        <span className="pagingBtn">
            <button onClick={onClickPageBtn(1)}>&lt;&lt;</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
        {len.map((v, i) => (
            <button key={i} onClick={onClickPageBtn(v)}>{v}</button>
        ))}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={onClickLastPageBtn()}>&gt;&gt;</button>
        </span>
    );
});
export default PageButton;