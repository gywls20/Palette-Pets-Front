import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import CommentResisterForm from './CommentResisterForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CommentList = () => {
    
    

    console.log(list)
    return (
        
        <>
            <div>
                {
                    list.map(item =>
                        <CommentItem key={item.articleCommentId} parentId={item.parentId} commentRef={item.ref} create_who={item.createdWho} content={item.content} created_At={item.createdAt} articleId={articleId} />
                    )
                }
             
            </div>

        </>
    );
};

export default CommentList;