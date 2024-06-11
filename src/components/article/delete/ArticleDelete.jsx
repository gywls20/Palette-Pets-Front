
import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ArticleDelete = (props) => {
    const {articleId,modalHandleClose} =props
    const navigate = useNavigate();

    const  onDelete = () =>{
        console.log(articleId)
         axios.delete(`http://localhost:8080/Delete/${articleId}`)
         .then(response => navigate('/board?sort=createdAt'))
         .catch(error => console.log(error))
    }

    return (    
        <>
            <Box sx={style}>
                        <div>선택한 글을 삭제하시겠습니까?</div>
                        <br/>
                        <Button variant="outlined" color="error" onClick={ onDelete}>삭제</Button>
                        <Button onClick={modalHandleClose}>취소</Button>
            </Box>
        </>
    );
};

export default ArticleDelete;