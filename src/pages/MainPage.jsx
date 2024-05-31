import DefaultLayout from "../layouts/DefaultLayout.jsx";
import VideoComp from "../components/mainPage/VideoComp.jsx";
import UpdateComp from "../components/mainPage/UpdateComp.jsx";
import BoardViewComp from "../components/mainPage/BoardViewComp.jsx";
import ReviewComp from "../components/mainPage/ReviewComp.jsx";


const MainPage = () => {
    return (
        <>
            <DefaultLayout>
                <VideoComp/>
                <UpdateComp/>
                <br/>
                <BoardViewComp/>
                <ReviewComp/>
                <br/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;