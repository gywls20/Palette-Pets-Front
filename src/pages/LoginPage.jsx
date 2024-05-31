import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import LoginImgComp from '../components/loginPage/LoginImgComp.jsx'
import LoginFormComp from '../components/loginPage/LoginFormComp.jsx'

const MainPage = () => {

    return (
        <>
            <br/>
            <br/>
            <HomeDefaultLayout>
                <LoginImgComp/>
                <LoginFormComp/>
            </HomeDefaultLayout>
            <br/>
            <br/>
        </>
    )
}

export default MainPage;