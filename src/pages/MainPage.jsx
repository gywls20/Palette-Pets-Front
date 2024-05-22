import TestComp from "../components/TestComp.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

const MainPage = () => {

    let navigate = useNavigate();

    const handleClickList = useCallback(() => {
        navigate({pathname: 'test'})
    })
    
    return (
        <>
            <DefaultLayout>
                <>
                    <TestComp/>
                    <button onClick={handleClickList}>버튼</button>
                </>
            </DefaultLayout>
        </>
    )
}

export default MainPage;