import DefaultLayout from "../layouts/DefaultLayout.jsx";
import {useNavigate} from 'react-router-dom'
import {useCallback} from 'react'

import Video from "../test/main/Video.jsx";
import UpdateComp from "../components/mainPage/UpdateComp.jsx";
import BoardView from "../test/main/BoardView.jsx";
import ReviewComp from "../components/mainPage/ReviewComp.jsx";

const MainPage = () => {

    let navigate = useNavigate();

    const handleClickList = useCallback(() => {
        navigate({pathname: 'test'})
    })
    
    return (
        <>
            <DefaultLayout>
                <Video/>
                <UpdateComp/>
                <br/>
                <BoardView/>
                <ReviewComp/>
                <br/>
                <br/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;