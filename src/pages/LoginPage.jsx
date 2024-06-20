import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import LoginImgComp from '../components/loginPage/LoginImgComp.jsx'
import LoginFormComp from '../components/loginPage/LoginFormComp.jsx'
import DefaultLayout from "../layouts/DefaultLayout.jsx";

const MainPage = () => {

    return (
        <>
            <br/>
            <br/>
            <DefaultLayout>
                <LoginImgComp/>
                <LoginFormComp/>
            </DefaultLayout>
            <br/>
            <br/>
        </>
    )
}

export default MainPage;