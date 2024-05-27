import TestComp from "../../components/TestComp.jsx";
import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useCallback} from "react";
import Box from "@mui/material/Box";

const TestPage = () => {

    let navigate = useNavigate();

    const handleClickList = useCallback(() => {
        navigate({pathname: 'list'})
    })

    return (
        <>
            <DefaultLayout>
                <>
                    <TestComp/>
                    <button onClick={handleClickList}>리스트로 가기</button>
                    <h1>테스트페이지</h1>
                    <Box>
                        <Outlet />
                    </Box>
                </>
            </DefaultLayout>
        </>
    )
}

export default TestPage;