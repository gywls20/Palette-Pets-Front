import React from 'react';
import InputTitleContent from '../atoms/InputTitleContent';
import SelectBoard from '../atoms/SelectBoard';
import SelectTags from '../atoms/SelectTags';
import ArticleImageUploadComp from '../atoms/ArticleImageUploadComp';
import ArticleWriteFooter from '../atoms/ArticleWriteFooter';
import ArticleImageEdit from '../atoms/ArticleImageEdit';
import UserMakeTags from '../atoms/UserMakeTags';


const ArticleWriteBlock = () => {
    
    
    return (


        <div>
            
            <SelectBoard/>
            <UserMakeTags/>
            {/* <SelectTags/> */}
            <InputTitleContent/>
            <ArticleImageUploadComp/>
            <ArticleWriteFooter/>
          
           
        </div>

    );
    
};

export default ArticleWriteBlock;