import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const CommentResisterForm = ({ commentRef, articleId, parentId,setIsArticleSubmitted,isArticleSubmitted}) => {
    
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
       
        await addComment(addDto)
        setComment('');
        setIsArticleSubmitted(!isArticleSubmitted);
      }

    return (


        <>
            <textarea style={style} value={comment} rows={1} onChange={commentInput} placeholder='댓글을 입력해 주세요' />
            <FontAwesomeIcon icon={faPaperPlane} style={{ width: 40, height: 40 }} onClick={onSubmit} />
        </>

    );
};

export default CommentResisterForm;