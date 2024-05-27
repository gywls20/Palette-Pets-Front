import React from 'react';
import InputTitleContent from '../atoms/InputTitleContent';
import SelectBoard from '../atoms/SelectBoard';
import SelectTags from '../atoms/SelectTags';
import ArticleImageUploadComp from '../atoms/ArticleImageUploadComp';
import ArticleImagePreviewComp from '../atoms/ArticleImagePreviewComp';
import ArticleWriteFooter from '../atoms/ArticleWriteFooter';


const ArticleWriteBlock = () => {
    
    
    return (


        <div>
            <SelectBoard/>
            <SelectTags/>
            <InputTitleContent/>
            <ArticleImageUploadComp/>
            <ArticleImagePreviewComp/>
            <ArticleWriteFooter/>

        </div>

    );
    
};

export default ArticleWriteBlock;