import { Button } from '@mui/material';
import React from 'react';
import { useArticleImageUpload } from '../context/ArticleImageUploadContext';

const ArticleWriteFooter = () => {
    
    const articleImageUploadContext = useArticleImageUpload();
    const {reset,onSubmit} = articleImageUploadContext;
    
    return (
        <div>
            <Button onClick={onSubmit}>Submit</Button>
            <Button onClick={reset}>Reset</Button>
        </div>
    );
};

export default ArticleWriteFooter;