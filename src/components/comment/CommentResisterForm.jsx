import React, { useState } from 'react';
import { addComment } from '../../service/commentApi';


const style = {
    width: '80%',
    height: '2.5em',
    resize: 'none',
    padding: '10px',
    fontSize: '12pt',
    overflow: 'hidden',
    borderRadius: '20px',
    margin: '0px 7px'

}

const CommentResisterForm = ({ memberNickname, commentRef, articleId, parentId, setIsArticleSubmitted, isArticleSubmitted }) => {

    const [comment, setComment] = useState('');


    const commentInput = (e) => {
        setComment(e.target.value)
    }

    const onSubmit = async () => {

        const addDto = {
            articleId: articleId,
            ref: commentRef,
            parentId: parentId,
            content: comment
        }

        const response = await addComment(addDto)
        console.log(response)
        setComment('');
        setIsArticleSubmitted(!isArticleSubmitted);
    }

    return (


        <>
            
                <div>@{memberNickname}님 에게 댓글</div>
                <div style={{ display: 'flex' }}>
                    <textarea style={style} value={comment} rows={1} onChange={commentInput} placeholder='댓글을 입력해 주세요' />
                    <button style={{ padding: '10px' }} onClick={onSubmit} >등록</button>
                </div>
          
        </>

    );
};

export default CommentResisterForm;