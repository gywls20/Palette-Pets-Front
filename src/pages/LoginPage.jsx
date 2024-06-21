import LoginImgComp from '../components/loginPage/LoginImgComp.jsx'
import LoginFormComp from '../components/loginPage/LoginFormComp.jsx'
import DefaultLayout from "../layouts/DefaultLayout.jsx";

const MainPage = () => {

    return (
        <>
            <DefaultLayout>
                <LoginImgComp/>
                <LoginFormComp/>
            </DefaultLayout>
        </>
    )
}

export default MainPage;