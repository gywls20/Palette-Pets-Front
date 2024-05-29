import {Box, Button, Card, CardContent, CardMedia, Typography} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import PetUpdateForm from "./PetUpdateForm.jsx";

const PetDetails = () => {
    const pet = {
        petId: 1,
        createdWho: 1,
        petName: "김승원",
        petImage: "https://images.mypetlife.co.kr/content/uploads/2023/11/17133418/61fbb115-3845-4427-b72d-76c5e650cd3c.jpeg",
        petCategory1: "dog",
        petCategory2: "jindo",
        petBirth: "2022-01-01",
        petGender:'F',
        petWeight: 20,
        petImgList: {}
    };

    // 펫 등록 폼 -> 모달 처럼 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card sx={{ maxWidth: '100%', width: '100%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={pet.petImage}
                    alt={pet.petName}
                />
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h4" component="div" gutterBottom>
                        {pet.petName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        생일 : {pet.petBirth} (24년 4개월)
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        품종 : {pet.petCategory1}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        몸무게 : {pet.petWeight} kg
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button variant="contained" color="primary" startIcon={<ListIcon />} size="large"
                            onClick={() => navigate('/pet')}
                        >
                            목록으로
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick={openModal}
                                variant="contained"
                                color={"inherit"}
                                startIcon={<SendIcon />}
                                size="large"
                        >
                            수정하기
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <PetUpdateForm closeModal={closeModal} pet={pet} />
                    </div>
                </div>
            )}
        </Box>
    );
};

export default PetDetails;