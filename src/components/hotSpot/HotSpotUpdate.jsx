import {useEffect, useState} from 'react';
import ImageUpload from "../article/write/atoms/ImageUpload.jsx";
import {Button, Card, Grid, TextField} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import "../../styles/hotspot/hotSpotUpdate.css";
import {getHotSpotDetail, updateHotSpot} from "../../service/hotSpotApi.jsx";
import Swal from "sweetalert2";


const HotSpotUpdate = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [simpleContent, setSimpleContent] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const [imgFiles, setImgFiles] = useState([]);
    const [previewList, setPreviewList] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHotSpotDetail(id);
            console.log(result);
            setTitle(result.placeName);
            setSimpleContent(result.simpleContent);
            setContent(result.content);
            setAddress(result.address);
            setLat(result.lat);
            setLng(result.lng);
        }
        fetchData();
    }, []);

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onSubmit = async () => {
        // 유효성 검사
        if (!title.trim()) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '제목을 입력해주세요.',
                icon: 'warning'
            });
            return;
        }
        if (!simpleContent.trim()) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '간단 소개를 입력해주세요.',
                icon: 'warning'
            });
            return;
        }
        if (!content.trim()) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '내용을 입력해주세요.',
                icon: 'warning'
            });
            return;
        }
        if (!address.trim()) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '주소를 입력해주세요.',
                icon: 'warning'
            });
            return;
        }
        if (isNaN(lat) || lat === 0) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '유효한 위도를 입력해주세요.',
                icon: 'warning'
            });
            return;
        }
        if (isNaN(lng) || lng === 0) {
            await Swal.fire({
                title: '유효성 검사 실패',
                text: '유효한 경도를 입력해주세요.',
                icon: 'warning'
            });
            return;
        }

        const dto = {
            hotSpotId: id,
            placeName: title,
            simpleContent: simpleContent,
            content: content,
            address: address,
            lat: lat,
            lng: lng
        };

        const formData = new FormData();
        Object.values(imgFiles).forEach((item) => {
            formData.append('files', item);
        });
        const blob = new Blob([JSON.stringify(dto)], { type: "application/json" });
        formData.append('request', blob);

        const result = await updateHotSpot(id, formData);

        if (result === true) {
            navigate("/hotspot", { replace: true });
        } else {
            await Swal.fire({
                title: '명소 추천 글 수정 실패',
                text: '알 수 없는 이유로 실패했습니다. 관리자에게 문의해주세요',
                icon: 'warning'
            });
        }
    }

    const onReset = () => {
        setTitle("");
        setSimpleContent("");
        setContent("");
        setImgFiles([]);
        setPreviewList([]);
    }

    return (
        <Card sx={{ width: '90%', maxWidth: 800, margin: '50px auto', padding: 4 }}>
            <h1>수정 페이지</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="간단 소개"
                        value={simpleContent}
                        onChange={(e) => setSimpleContent(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="내용"
                        multiline
                        rows={8}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="주소"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="위도"
                        type="number"
                        value={lat}
                        onChange={(e) => setLat(parseFloat(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="경도"
                        type="number"
                        value={lng}
                        onChange={(e) => setLng(parseFloat(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ImageUpload
                        previewList={previewList}
                        setPreviewList={setPreviewList}
                        imgFiles={imgFiles}
                        setImgFiles={setImgFiles}
                    />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={onSubmit}>
                            수정 완료
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={onReset}>
                            다시 쓰기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default HotSpotUpdate;
