import React, { useEffect, useState } from 'react';

import SelectBoard from './atoms/SelectBoard';
import useForm from '../../../hooks/useForm';
import UserMakeTags from './atoms/UserMakeTags';
import InputTitle from './atoms/InputTitle';
import InputContent from './atoms/InputContent';
import ImageUpload from './atoms/ImageUpload';
import { Button } from '@mui/material';


const initialForm = {
    boardName: 'FREEBOARD',
    tags: [],
    title: '',
    content: ''
}

const ArticleWriteForm = () => {

    const [form, onChange, onInput, reset] = useForm(initialForm);
    const [imgFiles, setImgFiles] = useState([]);

    const onSubmit = () => {

        const formData = new FormData();
        formData.append('file', imgFiles);
        const blob = new Blob([JSON.stringify(form)], {type: "application/json"});
        formData.append('dto', blob);

        
        console.log(form)
    }

    return (


        <div>

            <SelectBoard boardName={form.boardName} onChange={onChange} />
            <UserMakeTags tags={form.tags} onInput={onInput} />
            <InputTitle title={form.title} onChange={onChange} />
            <InputContent content={form.content} onChange={onChange} />
            <ImageUpload imgFiles={imgFiles} setImgFiles={setImgFiles} />

            <Button onClick={() => onSubmit()}>작성 완료</Button>
            <Button onClick={() => reset(initialForm)}>다시 쓰기</Button>

        </div>

    );

};

export default ArticleWriteForm;