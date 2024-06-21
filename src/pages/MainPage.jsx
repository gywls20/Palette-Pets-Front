import DefaultLayout from "../layouts/DefaultLayout.jsx";
import BoardViewComp from "../components/mainPage/BoardViewComp.jsx";

const MainPage = () => {
    return (
        <>
            <DefaultLayout>
                {/* <UpdateComp/> */}
                <br/>
                <BoardViewComp/>
                <hr/>
                {/* <ReviewComp/> */}
                <br/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;