import React, { useEffect, useState } from 'react';


import { Button } from '@mui/material';
import useForm from '../../../hooks/useForm';
import SelectBoard from '../write/atoms/SelectBoard';
import UserMakeTags from '../write/atoms/UserMakeTags';
import InputTitle from '../write/atoms/InputTitle';
import InputContent from '../write/atoms/InputContent';
import ImageUpload from '../write/atoms/ImageUpload';
import { useParams } from 'react-router-dom';
import { getUpdateArticle } from '../../../service/ArticleService';





const ArticleUpdateForm = () => {

    const { articleId } = useParams();
    console.log("1번")
    const [initailState,setInitailState] = useState({})
    console.log("2번")
    console.log(initailState)
    const [form, onChange, onInput, reset] = useForm(initialState);
    console.log("3번")
    console.log(form)
    const [imgFiles, setImgFiles] = useState(null);
    console.log(imgFiles)
    useEffect( () => {
        console.log("useEffect")
        async function fetchData() {
            // You can await here
            const response = await getUpdateArticle(articleId);
            // ...
            console.log(response)
            setInitailState({
                boardName:'FREEBOARD',
                tags:[],
                title:response.title,
                content:response.content,
            })
            setImgFiles(response.images)
        }
        fetchData();
    }, [articleId]);

    
    




    const onSubmit = async () => {




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

export default ArticleUpdateForm;