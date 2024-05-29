import {Card, CardContent, CardMedia, Typography, Grid, Button} from '@mui/material';
import PetRegisterForm from "./PetRegisterForm.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PetList = () => {

    // dummy data
    const dummyPetList = [
        {
            petId: 1,
            createdWho: 1,
            petName: "김승원",
            petImage: "https://images.mypetlife.co.kr/content/uploads/2023/11/17133418/61fbb115-3845-4427-b72d-76c5e650cd3c.jpeg",
            petCategory1: "dog",
            petCategory2: "jindo",
            petBirth: "2022-01-01",
            petGender:'F',
            petWeight: 20,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        },
        {
            petId: 2,
            createdWho: 1,
            petName: "시바",
            petImage: "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTZfMjUx/MDAxNjAyODA2NzUxNDk0.wI06VTUHJZ-eUxevPU4ISv-9Zhh4S7dMGDKqCeOe-Vcg.8rmIYDqjTyZRaSIuHNiWOredyJMsJDcLCfXZiCh1H8Ag.PNG.firstco213/%EB%8C%80%ED%91%9C.PNG?type=w800",
            petCategory1: "dog",
            petCategory2: "siba",
            petBirth: "2020-01-01",
            petGender:'M',
            petWeight: 10,
            petImgList: null
        }
    ];

    // 펫 등록 폼 -> 모달 처럼 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
    };

    return (
        <>
            <h1>PetList</h1>
            <Slider {...settings}>
                <Grid container spacing={2}>
                    {dummyPetList.map((pet) => (
                        <Grid item xs={12} sm={6} md={4} key={pet.petId} className='reviewSlider'>
                            <Card onClick={() => navigate(`/pet/details/${pet.petId}`)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={pet.petImage}
                                    alt={pet.petName}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {pet.petName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {pet.petCategory1} - {pet.petCategory2}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        생일: {pet.petBirth}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        체중: {pet.petWeight}kg
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Slider>
            <br/>
            <br/>
            <Button onClick={openModal}>펫 등록하기</Button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <PetRegisterForm closeModal={closeModal} />
                    </div>
                </div>
            )}
        </>
    );
}

export default PetList;