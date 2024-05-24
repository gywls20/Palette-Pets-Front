import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const ArticleTest = () => {
    const [userDTO, setUserDTO] = useState({
        id : 1,
        articleTags:'류원근',
        title : '짱짱',
        content : '리액트고수'

    });

    const onSubmit = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8080/articleWriteTest',userDTO)
        .then(res=>
            console.log(res.data)
        )
        .catch(error => 
            console.log(error)
        )

    }
    

    return (
        <div>

            유저ID <input type='text' name='memberId' value={userDTO.id} />   
            <br/>
            게시판 종류 <input type='text' name='article_tags' value={userDTO.articleTags}/>
            <br/>
            제목 <input type='text' name='title' value={userDTO.title}/> 
            <br/>
            내용 <input type='text' name='content' value={userDTO.content}/>
            <br/>
            <Button onClick={ onSubmit }>전송 테스트</Button>
        </div>
    );
};

export default ArticleTest;