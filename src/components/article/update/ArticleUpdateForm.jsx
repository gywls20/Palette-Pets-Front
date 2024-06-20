import React, { useEffect, useState } from 'react';


import { Button } from '@mui/material';
import useForm from '../../../hooks/useForm';
import SelectBoard from '../write/atoms/SelectBoard';
import UserMakeTags from '../write/atoms/UserMakeTags';
import InputTitle from '../write/atoms/InputTitle';
import InputContent from '../write/atoms/InputContent';
import ImageUpload from '../write/atoms/ImageUpload';
import { useNavigate, useParams } from 'react-router-dom';
import { getUpdateArticle, resistUpdateArticle } from '../../../service/ArticleService';



const initialForm = {

    boardName: '',
    articleHead: '',
    articleTags: [],
    title: '',
    content: '',

}


const imageAsFile = (url) => {
    const fullUrl = `https://kr.object.ncloudstorage.com/palettepets/article/img/${url}`
    const blob = new Blob([JSON.stringify(fullUrl)], { type: "application/json" });
    const file = new File([blob], url, { type: blob.type });
    return file
};

const ArticleUpdateForm = () => {

    const { articleId } = useParams();

    const [form, onChange, onInput, reset, setForm] = useForm(initialForm);

    const [resetSwitch, setResetSwitch] = useState(false);

    const [imgFiles, setImgFiles] = useState([]);
    const [previewList, setPreviewList] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {
            // You can await here
            const response = await getUpdateArticle(articleId);
            // ...
            const tagArray = response.articleTags.split(',');

            setForm({
                articleHead: response.articleHead,
                articleTags: tagArray,
                boardName: response.boardName,
                content: response.content,
                title: response.title
            })
            const imgArray = response.images && response.images.map(image => `https://kr.object.ncloudstorage.com/palettepets/article/img/${image.imgUrl}`);

            const files = response.images && response.images.map((item) =>
                imageAsFile(item.imgUrl)
            )

            setImgFiles(files);
            setPreviewList(imgArray);
        }

        fetchData();

    }, [resetSwitch]);

    const validate = (form) => {
        
        const { articleHead, title, content } = form

        if (articleHead === '' || articleHead === null) {
            return false
        } else if (title === '' || title === null) {
            return false
        } else if (content === '' || content === null) {
            return false
        }
        
    }


    const onSubmit = async () => {

        validate(form);

        const formData = new FormData();
        Object.values(imgFiles).map((item, index) => {
            formData.append('files', item);
        });
        const blob = new Blob([JSON.stringify(form)], { type: "application/json" });
        formData.append('dto', blob);
        await resistUpdateArticle(formData, articleId);


        navigate(-1);

    }

    return (

        <div>

            <SelectBoard boardName={form.boardName} onChange={onChange} />
            <UserMakeTags articleTags={form.articleTags} onInput={onInput} />
            <InputTitle boardName={form.boardName} articleHead={form.articleHead} title={form.title} onChange={onChange} />
            <InputContent content={form.content} onChange={onChange} />
            <ImageUpload previewList={previewList} setPreviewList={setPreviewList} imgFiles={imgFiles} setImgFiles={setImgFiles} />

            <Button onClick={() => onSubmit()}>작성 완료</Button>
            <Button onClick={() => setResetSwitch(!resetSwitch)}>다시 쓰기</Button>

        </div>

    );

};

export default ArticleUpdateForm;