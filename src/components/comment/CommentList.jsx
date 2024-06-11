import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import CommentResisterForm from './CommentResisterForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CommentList = () => {
    const articleId = 56
    const [list,setList] = useState([]);

    useEffect(async () => {
            await axios.get('http://localhost:8080/Get/comments/56')
            .then(response => setList(response.data))
            .catch(error => console.log(error))

    },[])
   
    console.log(list)
    return (
        
        <>
            <div>
                {
                    list.map(item =>
                        <CommentItem key={item.articleCommentId} parentId={item.parentId} commentRef={item.ref} create_who={item.createdWho} content={item.content} created_At={item.createdAt} articleId={articleId} />
                    )
                }
                <CommentResisterForm commentRef={0} articleId={articleId} parentId={0} />
            </div>

        </>
    );
};

export default CommentList;