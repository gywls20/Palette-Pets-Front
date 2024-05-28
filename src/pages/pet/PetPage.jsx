import HomeDefaultLayout from "../../layouts/HomeDefaultLayout.jsx";
import {jwtTestRequest} from "../../service/api.jsx";
import {useSelector} from "react-redux";

const PetPage = () => {
    const token = useSelector((state) => state.MemberSlice.token);

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
                <div>모달로 펫 등록 / 수정</div>
                <button onClick={test}>요청 및 재발급 테스트 버튼</button>
            </HomeDefaultLayout>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default PetPage;