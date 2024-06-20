import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import { PostFeed } from '../../service/memberApi'; // API 함수 import
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedComp = () => {
    const [images, setImages] = useState([]);
    const [text, setText] = useState('');
    const [previews, setPreviews] = useState([]);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);
    const navigateBack = () => {
        navigate(-1);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        const newPreviews = files.map(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPreviews(prev => [...prev, reader.result]);
            };
        });
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (images.length === 0) {
            alert('이미지를 추가해주세요.');
            return;
        }

        try {
            const dto = { text };
            const response = await PostFeed(dto, images);
            console.log('피드 폼데이터 Response: 디티오', dto);
            console.log('피드 폼데이터 Response: 이미지', images);
            // 성공적으로 업로드한 후 할 작업
            navigate(-1);
        } catch (error) {
            console.error('Error uploading the feed:', error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton onClick={navigateBack}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>새로운 피드 올리기</Typography>
                <Box sx={{ width: 48 }} /> {/* 아이콘 버튼의 너비와 동일한 크기의 빈 박스 */}
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="contained" component="label">
                        이미지 업로드
                        <input
                            type="file"
                            hidden
                            multiple
                            ref={fileInputRef}
                            onChange={handleImageChange}
                        />
                    </Button>
                </Grid>
                {previews.length > 0 && (
                    <Grid item xs={12}>
                        <Slider {...settings}>
                            {previews.map((preview, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={preview}
                                    alt={`Image Preview ${index}`}
                                    sx={{ width: '100%', height: 'auto', objectFit: 'cover', mb: 2 }}
                                />
                            ))}
                        </Slider>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <TextField
                        label="내용"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={text}
                        onChange={handleTextChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        제출
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeedComp;
