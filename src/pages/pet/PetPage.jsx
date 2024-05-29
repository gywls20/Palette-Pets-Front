import {jwtTestRequest} from "../../service/api.jsx";
import {useSelector} from "react-redux";
import "./../../styles/pet/petPage.css"
import {Outlet} from "react-router-dom";
import {Button} from "@mui/material";
import DefaultLayout from "../../layouts/DefaultLayout.jsx";

const PetPage = () => {
    const token = useSelector((state) => state.MemberSlice.token);

    const test = async () => {
        const result = await jwtTestRequest();
        console.log(result);
        alert(result);
    }

    return (
        <>
            <br/>
            <br/>
            <br/>
            <DefaultLayout>
                <h1>펫 관리 페이지</h1>
                <Outlet />
                {/*<br/>*/}
                {/*<Button variant="contained" onClick={test}>요청 및 재발급 테스트 버튼</Button>*/}
            </DefaultLayout>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default PetPage;