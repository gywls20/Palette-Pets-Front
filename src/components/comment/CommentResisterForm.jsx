import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, borderRadius, fontSize } from '@mui/system';
import React, { useState } from 'react';
import CommentItem from './CommentItem';



const style = {
    width: '80%',
    height: '2.5em',
    resize: 'none',
    padding: '10px',
    fontSize: '12pt',
    overflow: 'hidden',
    borderRadius: '20px',
    margin:'0px 7px'

}

const CommentResisterForm = () => {

    const [comment, setComment] = useState('');

    const commentInput = (e) => {
        setComment(e.target.value)
    }

    const onSubmit = async () => {

        
    }
    

    return (


        <>

            <div>
             
                <span><img src='https://i.namu.wiki/i/HwzuYllF4gHU_dZFiiY_HyWlOwZMQ5ixa-aJTx06uduXH6NJUY0_-6TjvwUxneI8NOuc1TpDuXMqY1VEV4sk8zN1ySv9eMQ2r1IXqMLRU3WLYAG56z6sjn0TNTd76PV_cROhAqn-R3DVPWj313W8tQ.webp' alt='' width='40px' height='40px' style={{ borderRadius: '50%' }} /></span>
                <textarea style={style} value={comment} rows={1} onChange={commentInput} />
                <FontAwesomeIcon icon={faPaperPlane} style={{ width: 40, height: 40 }} onClick={onSubmit}/>

            </div>

        </>

    );
};

export default CommentResisterForm;