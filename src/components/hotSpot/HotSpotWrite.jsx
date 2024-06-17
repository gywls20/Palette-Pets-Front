import React, {useState} from 'react';
import InputTitle from "../article/write/atoms/InputTitle.jsx";
import InputContent from "../article/write/atoms/InputContent.jsx";
import ImageUpload from "../article/write/atoms/ImageUpload.jsx";
import {Button} from "@mui/material";
import "../../styles/hotspot/hotSpotWrite.css";
import useForm from "../../hooks/useForm.jsx";
import {useNavigate} from "react-router-dom";
import {writeArticle} from "../../service/ArticleService.jsx";
import {createHotSpot} from "../../service/hotSpotApi.jsx";


const HotSpotWrite = () => {


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
        formData.append('request', blob);
        console.log(dto);

        // 글 등록 api 연결
        const result = await createHotSpot(formData);
        console.log("result =", result);
        alert("result = ", result);
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
            <h1>등록 페이지</h1>
            <input
                value={title}
                className="write-title"
                type="text"
                placeholder="제목 작성"
                onChange={(e) => changeTitle(e)}
            />
            <br/>
            <input
                value={simpleContent}
                className="write-simpleContent"
                type="text"
                placeholder="간단 소개 작성"
                onChange={(e) => setSimpleContent(e.target.value)}
            />
            <br/>
            <textarea
                value={content}
                className="write-content"
                type="text"
                placeholder="내용 작성"
                onChange={(e) => setContent(e.target.value)}
            />
            <br/>
            <input
                value={address}
                className="write-address"
                type="text"
                placeholder="주소 작성"
                onChange={(e) => setAddress(e.target.value)}
            />
            <br/>
            <input
                value={lat}
                className="write-lat"
                type="number"
                placeholder="위도"
                onChange={(e) => setLat(e.target.value)}
            />
            <br/>
            <input
                value={lng}
                className="write-lng"
                type="number"
                placeholder="경도"
                onChange={(e) => setLng(e.target.value)}
            />
            <br/>
            <br/>
            <ImageUpload previewList={previewList} setPreviewList={setPreviewList} imgFiles={imgFiles}
                         setImgFiles={setImgFiles}/>

            <Button className="write-onSubmit" onClick={() => onSubmit()}>작성 완료</Button>
            <Button className="write-onReset" onClick={onReset}>다시 쓰기</Button>
        </>
    );
};

export default HotSpotWrite;