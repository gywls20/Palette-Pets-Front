import HomeDefaultLayout from "../../layouts/HomeDefaultLayout.jsx";
import {jwtTestRequest} from "../../service/api.jsx";
import {useSelector} from "react-redux";
import PetRegisterForm from "../../components/pet/PetRegisterForm.jsx";
import {useState} from "react";
import {Button} from "@mui/material";
import "./../../styles/pet/petPage.css"

const PetPage = () => {
    const token = useSelector((state) => state.MemberSlice.token);

    // 펫 등록 폼 -> 모달 처럼 관리
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const test = async () => {
        const result = await jwtTestRequest(token);
        console.log(result);
        alert(result);
    }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <HomeDefaultLayout>
                <h1>펫 관리 페이지</h1>
                <div>여기 펫 리스트</div>
                <Button onClick={openModal}>펫 등록하기</Button>
                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <PetRegisterForm />
                            <button onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                )}
                <br/>
                <button onClick={test}>요청 및 재발급 테스트 버튼</button>
            </HomeDefaultLayout>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default PetPage;