import {Box, Button, Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PetUpdateForm from "./PetUpdateForm.jsx";
import { styled } from '@mui/system';
import {petDeleteRequest, petDetailRequest, petListRequest} from "../../service/petApi.jsx";

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
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // pet details query
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await petDetailRequest(id);
                console.log("data = " + data);
                if (data === 'REFRESH_TOKEN_EXPIRED_ERROR') {
                    window.location.replace('/login');
                } else {
                    setPet(data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log('Failed to fetch data = ' + error);
                setError(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // 펫 등록 폼 -> 모달 처럼 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCloseClick =  async () => {
        // X 버튼 클릭 시 수행할 동작을 여기에 작성합니다.
        const isDelete = confirm("정말로 삭제 하시겠습니까?");
        if (isDelete) {
            const result = await petDeleteRequest(pet.petId);
            console.log(result);
            alert("반려동물 정보를 삭제했습니다.");
            navigate('/pet/list');
        } else {
            alert("삭제안됨 flag=" + isDelete);
        }
    };

    const navigate = useNavigate();

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
            <Card sx={{ maxWidth: '100%', width: '100%', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}>
                <CloseButton onClick={handleCloseClick}>
                    <CloseIcon />
                </CloseButton>
                <RoundedCardMedia
                    component="img"
                    height="300"
                    image={"https://kr.object.ncloudstorage.com/palettepets/pet/" + pet.petImage}
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