import DefaultLayout from "../layouts/DefaultLayout.jsx";
import UpdateComp from "../components/mainPage/UpdateComp.jsx";
import BoardViewComp from "../components/mainPage/BoardViewComp.jsx";
import ReviewComp from "../components/mainPage/ReviewComp.jsx";


const MainPage = () => {
    return (
        <>
            <DefaultLayout>
                {/* <UpdateComp/> */}
                <br/>
                <BoardViewComp/>
                <hr/>
                <ReviewComp/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;