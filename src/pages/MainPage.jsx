import { Update } from "@mui/icons-material";
import TestComp from "../components/TestComp.jsx";
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
                <br/>
                <BoardView/>
                <ReviewComp/>
                <br/>
                <UpdateComp/>
                <br/>
<<<<<<< HEAD
                <TestComp/>
=======
>>>>>>> 5799d2c7b093b152256fcbfe40e091e040f642b9
            </DefaultLayout>
        </>
    )
}

export default MainPage;