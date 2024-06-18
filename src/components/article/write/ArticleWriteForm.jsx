import React, { useEffect, useState } from 'react';

import SelectBoard from './atoms/SelectBoard';
import useForm from '../../../hooks/useForm';
import UserMakeTags from './atoms/UserMakeTags';
import InputTitle from './atoms/InputTitle';
import InputContent from './atoms/InputContent';
import ImageUpload from './atoms/ImageUpload';
import { Button } from '@mui/material';
import { writeArticle, spamCheck } from '../../../service/ArticleService.jsx'

import { useNavigate } from 'react-router-dom';





const initialForm = {

    boardName: 'FREEBOARD',
    articleHead: '',
    articleTags: [],
    title: '',
    content: ''
}

const ArticleWriteForm = () => {

    const [form, onChange, onInput, reset, setForm] = useForm(initialForm);
    const [imgFiles, setImgFiles] = useState([]);
    const [previewList, setPreviewList] = useState([]);

    const navigate = useNavigate();


    const onSubmit = async () => {

        const response = await spamCheck();

        if (response.status === 400) {

            alert(response.data)
            
        }
        else {
            const formData = new FormData();
            Object.values(imgFiles).map((item, index) => {
                formData.append('files', item);
            });
            const blob = new Blob([JSON.stringify(form)], { type: "application/json" });
            formData.append('dto', blob);

            await writeArticle(formData);
            navigate(-1);
        }
    }

    const onReset = () => {

        reset(initialForm)
        setImgFiles([]);
        setPreviewList([]);

    }

    return (


        <div>

            <SelectBoard boardName={form.boardName} onChange={onChange} />
            <UserMakeTags articleTags={form.articleTags} onInput={onInput} />
            <InputTitle boardName={form.boardName} articleHead={form.articleHead} title={form.title} onChange={onChange} />
            <InputContent content={form.content} onChange={onChange} />
            <ImageUpload previewList={previewList} setPreviewList={setPreviewList} imgFiles={imgFiles} setImgFiles={setImgFiles} />

            <Button onClick={() => onSubmit()}>작성 완료</Button>
            <Button onClick={onReset}>다시 쓰기</Button>

        </div>

    );

};

export default ArticleWriteForm;