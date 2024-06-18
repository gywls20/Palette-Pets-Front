import {Link, useNavigate, useParams} from "react-router-dom";
import Kakao from "./kakaoMap/Kakao.jsx";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import "../../styles/hotspot/hotSpotDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button, Rating} from "@mui/material";
import ReactQuill from "react-quill";
import {checkIsManager, deleteHotSpot, getHotSpotDetail, sendStarRating} from "../../service/hotSpotApi.jsx";
import BuildIcon from "@mui/icons-material/Build.js";
import Swal from "sweetalert2";
import { Row, Col } from 'react-bootstrap';

const HotSpotDetails = () => {

    const [hotspot, setHotspot] = useState({rating: 0});
    const [isManager, setIsManager] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    // 별점 평가 수행 여부 + 몇개 인지 가져오기 -> 무조건 1점부터 5점까지만 사용 (0은 평가 아직 안함을 나타냄)
    const [userRating, setUserRating] = useState(0);

    const handleRatingChange = (event, newValue) => {
        setUserRating(newValue);
    };

    const handleRatingSubmit = async () => {
        try {
            const dto = {
                hotSpotId: hotspot.hotSpotId,
                rating: userRating,
                memberId: null
            }
            // 서버에 별점 평가 요청 보내기
            const result = await sendStarRating(dto);
            if (result === true) {
                await Swal.fire({
                    title: '별점 평가 성공',
                    text: '소중한 평가 감사합니다!',
                    icon: 'success',
                    timer: 1500,
                });
            } else {
                await Swal.fire({
                    title: '별점 평가 실패',
                    text: '알 수 없는 이유로 실패했습니다. 다시 시도해주세요.',
                    icon: 'warning'
                });
            }
        } catch (err) {
            await Swal.fire({
                title: '별점 평가 실패',
                text: '알 수 없는 이유로 실패했습니다. 다시 시도해주세요.',
                icon: 'warning'
            });
            console.error(err);
        }
    };


    useEffect(() => {
        // axios로 핫스팟 정보 가져오기
        const fetchData = async () => {
            const result = await getHotSpotDetail(id);
            console.log(result);
            setHotspot(result);
            // 회원 정보 가 role이 ADMIN인지 확인하는 요청
            const checkManager = await checkIsManager();
            setIsManager(checkManager);
        }
        fetchData();
    }, []);

    // eslint-disable-next-line react/prop-types
    const NextArrow = ({onClick}) => {
        return (
            <Button
                className="slick-next"
                onClick={onClick}
                type="slick-next-button"
            >
            </Button>
        );
    };

    // eslint-disable-next-line react/prop-types
    const PrevArrow = ({onClick}) => {
        return (
            <Button
                className="slick-prev"
                onClick={onClick}
                type="slick-prev-button"
            >
            </Button>
        );
    };

    // 명소 글 삭제 요청
    const handleDeleteHotSpot = async (hotSpotId) => {
        try {
            const result = await deleteHotSpot(hotSpotId);
            if (result === true) {
                navigate("/hotspot/list", {replace: true});
            } else {
                await Swal.fire({
                    title: '명소 추천 글 삭제 실패',
                    text: '알 수 없는 이유로 실패했습니다. 관리자에게 문의해주세요',
                    icon: 'warning'
                });
            }
        } catch (err) {
            await Swal.fire({
                title: '명소 추천 글 삭제 실패',
                text: '알 수 없는 이유로 실패했습니다. 관리자에게 문의해주세요',
                icon: 'warning'
            });
            console.error(err);
        }
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <>
            {
                <>
                    {/*<Link to="/hotspot/" className="toList">목록으로</Link>*/}
                    <div className="image-list">
                        {hotspot.imgList && (
                            hotspot.imgList.length > 1 ? (
                                <Slider {...settings}>
                                    {hotspot.imgList.map((imgSrc, index) => (
                                        <div key={imgSrc.imgHotSpotId}>
                                            <img
                                                src={"https://kr.object.ncloudstorage.com/palettepets/hotspot/" + imgSrc.imgUrl}
                                                alt={`Hotspot image ${index + 1}`}
                                                className="centered-image"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                hotspot.imgList.map((imgSrc, index) => (
                                    <div key={imgSrc.imgHotSpotId}>
                                        <img
                                            src={"https://kr.object.ncloudstorage.com/palettepets/hotspot/" + imgSrc.imgUrl}
                                            alt={`Hotspot image ${index + 1}`}
                                            className="centered-image"
                                        />
                                    </div>
                                ))
                            )
                        )}
                    </div>
                    {isManager && (
                        <>
                            <Button
                                onClick={() => handleDeleteHotSpot(hotspot.hotSpotId)}
                                variant="outlined"
                            >
                                게시물 삭제
                            </Button>
                            <Link to={`/hotspot/update/${hotspot.hotSpotId}`}>
                                <button className="update-button">
                                    <BuildIcon />
                                </button>
                            </Link>
                        </>
                    )}
                    <h2>{hotspot.placeName}</h2>
                    <Rating value={hotspot.rating} precision={0.5} readOnly size="big"/>
                    <p>{hotspot.simpleContent}</p>
                    <ReactQuill
                        value={hotspot.content}
                        readOnly={true}
                        theme="snow"
                        modules={{toolbar: false}}
                        style={{height: 'auto', backgroundColor: 'white', minHeight: '500px'}}
                    />
                </>
            }
            {
                hotspot.lat && hotspot.lng && (
                    <>
                        <h3 style={{textAlign: 'left'}}>위치 보기</h3>
                        <p style={{textAlign: 'left'}}>{hotspot.address}</p>
                        <Kakao lat={hotspot.lat} lng={hotspot.lng}/>
                    </>
                )
            }
            <br/>
            <Row className="mt-4">
                <Col>
                    <h4>이 명소에 대한 별점을 남겨주세요!</h4>
                    <Rating
                        name="user-rating"
                        value={userRating}
                        onChange={handleRatingChange}
                        size="large"
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleRatingSubmit}
                        disabled={userRating === 0}
                        className="ml-2"
                    >
                        평가 제출
                    </Button>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
        </>
    );
};
export default HotSpotDetails;