import React from 'react';
import InputTitleContent from '../atoms/InputTitleContent';
import SelectBoard from '../atoms/SelectBoard';
import SelectTags from '../atoms/SelectTags';
import ArticleImageUploadComp from '../atoms/ArticleImageUploadComp';
import ArticleImagePreviewComp from '../atoms/ArticleImagePreviewComp';


const ArticleWriteBlock = () => {

    return (


        <div>
            <SelectBoard/>
            <InputTitleContent/>
            <ArticleImageUploadComp/>
            <ArticleImagePreviewComp/>
           
        </div>

    );
    
};

export default ArticleWriteBlock;