import React, {useState} from 'react';
import InputTitle from "../article/write/atoms/InputTitle.jsx";
import InputContent from "../article/write/atoms/InputContent.jsx";
import ImageUpload from "../article/write/atoms/ImageUpload.jsx";
import {Button} from "@mui/material";
import useForm from "../../hooks/useForm.jsx";
import {useNavigate} from "react-router-dom";
import {writeArticle} from "../../service/ArticleService.jsx";
import "../../styles/hotspot/hotSpotUpdate.css";


const HotSpotUpdate = () => {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [simpleContent, setSimpleContent] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const [imgFiles, setImgFiles] = useState([]);
    const [previewList,setPreviewList] = useState([]);

    const navigate = useNavigate();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onSubmit = async () => {

        // 간단한 검증

        const dto = {
            memberId: null,
            placeName: title,
            simpleContent:simpleContent,
            content: content,
            address: address,
            lat: lat,
            lng: lng
        };

        const formData = new FormData();
        Object.values(imgFiles).map((item) => {
            formData.append('files', item);
        });
        const blob = new Blob([JSON.stringify(dto)], { type: "application/json" });
        formData.append('dto', blob);

        // 글 등록 api 연결
        console.log(dto);
        alert("등록성공");
        // await writeArticle(formData);
        // navigate("/hotspot", {replace: true});

    }

    const onReset = () =>{

        setTitle("");
        setSimpleContent("");
        setContent("");
        setImgFiles([]);
        setPreviewList([]);

    }


    return (
        <>
            <h1>수정 페이지</h1>
            <input
                value={title}
                className="update-title"
                type="update-text"
                placeholder="제목 수정"
                onChange={(e) => changeTitle(e)}
            />
            <br/>
            <input
                value={simpleContent}
                className="update-simpleContent"
                type="text"
                placeholder="간단 소개 수정"
                onChange={(e) => setSimpleContent(e.target.value)}
            />
            <br/>
            <textarea
                value={content}
                className="update-content"
                type="text"
                placeholder="내용 수정"
                onChange={(e) => setContent(e.target.value)}
            />
            <br/>
            <input
                value={address}
                className="update-address"
                type="text"
                placeholder="주소 수정"
                onChange={(e) => setAddress(e.target.value)}
            />
            <br/>
            <input
                value={lat}
                className="update-lat"
                type="number"
                placeholder="위도"
                onChange={(e) => setLat(e.target.value)}
            />
            <br/>
            <input
                value={lng}
                className="update-lng"
                type="number"
                placeholder="경도"
                onChange={(e) => setLng(e.target.value)}
            />
            <br/>
            <br/>
            <ImageUpload previewList={previewList} setPreviewList={setPreviewList} imgFiles={imgFiles}
                         setImgFiles={setImgFiles}/>

            <Button className="update-onSubmit" onClick={() => onSubmit()}>수정 완료</Button>
            <Button className="update-onReset" onClick={onReset}>다시 쓰기</Button>
        </>
    );
};

export default HotSpotUpdate;