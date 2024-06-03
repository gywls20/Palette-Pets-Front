import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import CommentResisterForm from './CommentResisterForm';
import axios from 'axios';

const CommentList = () => {
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
                        <CommentItem pref={item.ref} create_who={item.createdWho} content={item.content} created_At={item.createdAt} />
                    )
                }
                <CommentResisterForm />
            </div>

        </>
    );
};

export default CommentList;