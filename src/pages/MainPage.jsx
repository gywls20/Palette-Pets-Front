import DefaultLayout from "../layouts/DefaultLayout.jsx";

import Video from "../test/main/Video.jsx";
import UpdateComp from "../components/mainPage/UpdateComp.jsx";
import BoardView from "../test/main/BoardView.jsx";
import ReviewComp from "../components/mainPage/ReviewComp.jsx";

const MainPage = () => {

    return (
        <>
            <DefaultLayout>
                <Video/>
                <UpdateComp/>
                <br/>
                <BoardView/>
                <ReviewComp/>
                <br/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;