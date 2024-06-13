import {Link, useParams} from "react-router-dom";
import Kakao from "./kakaoMap/Kakao.jsx";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import "../../styles/hotspot/hotSpotDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button, Rating} from "@mui/material";
import ReactQuill from "react-quill";
import {getHotSpotDetail} from "../../service/hotSpotApi.jsx";

const HotSpotDetails = () => {

    const [hotspot, setHotspot] = useState({ rating: 0 });

    const { id } = useParams();

    useEffect(() => {
        // axios로 핫스팟 정보 가져오기
        const fetchData = async () => {
            const result = await getHotSpotDetail(id);
            console.log(result);
            setHotspot(result);
        }
        fetchData();
    },[]);

    // eslint-disable-next-line react/prop-types
    const NextArrow = ({ onClick }) => {
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
    const PrevArrow = ({ onClick }) => {
        return (
            <Button
                className="slick-prev"
                onClick={onClick}
                type="slick-prev-button"
            >
            </Button>
        );
    };

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            {
                <>
                    <div className="image-list">
                        {hotspot.imgList && (
                            hotspot.imgList.length > 1 ? (
                                <Slider {...settings}>
                                    {hotspot.imgList.map((imgSrc, index) => (
                                        <div key={imgSrc.imgHotSpotId}>
                                            <img
                                                src={imgSrc.imgUrl}
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
                                            src={imgSrc.imgUrl}
                                            alt={`Hotspot image ${index + 1}`}
                                            className="centered-image"
                                        />
                                    </div>
                                ))
                            )
                        )}
                    </div>
                    <h2>{hotspot.placeName}</h2>
                    <Rating value={hotspot.rating} precision={0.5} readOnly size="big" />
                    <p>{hotspot.simpleContent}</p>
                    <ReactQuill
                        value={hotspot.content}
                        readOnly={true}
                        theme="snow"
                        modules={{ toolbar: false }}
                        style={{ height: 'auto', backgroundColor: 'white', minHeight: '500px'}}
                    />
                </>
            }
            {
                hotspot.lat && hotspot.lng && (
                    <>
                        <h3 style={{ textAlign:'left'}}>위치 보기</h3>
                        <p style={{ textAlign:'left'}}>{hotspot.address}</p>
                        <Kakao lat={hotspot.lat} lng={hotspot.lng}/>
                    </>
                )
            }
            <Link to="/hotspot/" className="toList">목록으로</Link>
        </>
    );
}

export default HotSpotDetails;
