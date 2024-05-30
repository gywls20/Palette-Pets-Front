import {Box, Button, Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import PetUpdateForm from "./PetUpdateForm.jsx";
import { styled } from '@mui/system';

const RoundedCardMedia = styled(CardMedia)({
    borderRadius: '50%',
    width: 150,
    height: 150,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 10,
});

const CloseButton = styled(IconButton)({
    position: 'flex',
    top: 10,
    right: '-43%',
    color: 'gray',
});


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

    const handleCloseClick = () => {
        // X 버튼 클릭 시 수행할 동작을 여기에 작성합니다.
        const isDelete = confirm("정말로 삭제 하시겠습니까?");
        if (isDelete) {
            alert("삭제됨 flag=" + isDelete);
        } else {
            alert("삭제안됨 flag=" + isDelete);
        }
        // navigate('/pet');
    };

    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card sx={{ maxWidth: '100%', width: '100%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
                <CloseButton onClick={handleCloseClick}>
                    <CloseIcon />
                </CloseButton>
                <RoundedCardMedia
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