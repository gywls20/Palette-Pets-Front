import React from 'react';
import Slider from "react-slick";
import { Container, Box, Typography, Avatar, Link, Badge } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewComp() {
    let settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
    };

    return (
        <Slider {...settings}>
            <div className={"reviewSlider"}>
                <Container maxWidth="sm" sx={{mt: 4}}>
                    <Link href="#" sx={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar
                                src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                                sx={{width: 48, height: 48, mr: 2}}
                            />
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="subtitle1" color="text.primary">
                                    첫번째 후기 글입니다.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <AccessTimeIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>몇 시간 전
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <VisibilityIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>조회수
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <FavoriteBorderIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>좋아요
                            </Typography>
                            <Badge badgeContent={999} color="primary">
                                <Typography variant="body2" color="text.secondary">댓글</Typography>
                            </Badge>
                        </Box>
                    </Link>
                </Container>
            </div>

            <div className={"reviewSlider"}>
                <Container maxWidth="sm" sx={{mt: 4}}>
                    <Link href="#" sx={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar
                                src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                                sx={{width: 48, height: 48, mr: 2}}
                            />
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="subtitle1" color="text.primary">
                                    두번째 후기 글입니다.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <AccessTimeIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>몇 시간 전
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <VisibilityIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>조회수
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <FavoriteBorderIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>좋아요
                            </Typography>
                            <Badge badgeContent={999} color="primary">
                                <Typography variant="body2" color="text.secondary">댓글</Typography>
                            </Badge>
                        </Box>
                    </Link>
                </Container>
            </div>

            <div className={"reviewSlider"}>
                <Container maxWidth="sm" sx={{mt: 4}}>
                    <Link href="#" sx={{textDecoration: 'none'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar
                                src="https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG"
                                sx={{width: 48, height: 48, mr: 2}}
                            />
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="subtitle1" color="text.primary">
                                    세번째 후기 글입니다.
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <AccessTimeIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>몇 시간 전
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography variant="" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <VisibilityIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>조회수
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center', mr: 1}}>
                                <FavoriteBorderIcon sx={{verticalAlign: 'middle', mr: 0.5}}/>좋아요
                            </Typography>
                            <Badge badgeContent={999} color="primary">
                                <Typography variant="body2" color="text.secondary">댓글</Typography>
                            </Badge>
                        </Box>
                    </Link>
                </Container>
            </div>


        </Slider>
    );
}