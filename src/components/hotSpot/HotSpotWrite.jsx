import React, {useState} from 'react';
import ImageUpload from "../article/write/atoms/ImageUpload.jsx";
import {Button, Card} from "@mui/material";
import "../../styles/hotspot/hotSpotWrite.css";
import {useNavigate} from "react-router-dom";
import {createHotSpot} from "../../service/hotSpotApi.jsx";
import Swal from "sweetalert2";


const HotSpotWrite = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [simpleContent, setSimpleContent] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const [imgFiles, setImgFiles] = useState([]);
    const [previewList, setPreviewList] = useState([]);

    const navigate = useNavigate();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const validateInputs = () => {
        if (title.trim() === "" || simpleContent.trim() === "" || content.trim() === "" || address.trim() === "") {
            Swal.fire({
                title: '입력 오류',
                text: '모든 필드를 채워주세요.',
                icon: 'error'
            });
            return false;
        }

        if (isNaN(lat) || isNaN(lng)) {
            Swal.fire({
                title: '입력 오류',
                text: '위도와 경도는 숫자여야 합니다.',
                icon: 'error'
            });
            return false;
        }

        return true;
    }

    const onSubmit = async () => {

        if (!validateInputs()) {
            return;
        }

        const dto = {
            memberId: null,
            placeName: title,
            simpleContent: simpleContent,
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

        // 글 등록 api 연결
        const result = await createHotSpot(formData);

        if (result === true) {
            navigate("/hotspot", {replace: true});
        } else {
            await Swal.fire({
                title: '명소 추천 글 등록 실패',
                text: '알 수 없는 이유로 실패했습니다. 관리자에게 문의해주세요',
                icon: 'warning'
            });
        }
    }

    const onReset = () => {
        setTitle("");
        setSimpleContent("");
        setContent("");
        setAddress("");
        setLat(0);
        setLng(0);
        setImgFiles([]);
        setPreviewList([]);
    }

    return (
        <Card sx={{width: '90%', marginBottom: 2 , marginTop : 5, display: 'inline-block', }}
              className="writeCard"
        >
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
            <ImageUpload previewList={previewList} setPreviewList={setPreviewList} imgFiles={imgFiles} setImgFiles={setImgFiles}/>

            <Button className="write-onSubmit" onClick={onSubmit}>작성 완료</Button>
            <Button className="write-onReset" onClick={onReset}>다시 쓰기</Button>
        </Card>
    );
};

export default HotSpotWrite;
