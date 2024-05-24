import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import LoginForm from "../test/login/LoginForm.jsx";
import LoginImg from "../test/login/LoginImg.jsx";

const MainPage = () => {

    return (
        <>
            <br/>
            <br/>
            <HomeDefaultLayout>
                <LoginImg/>
                <LoginForm/>
            </HomeDefaultLayout>
            <br/>
            <br/>
        </>
    )
}

export default MainPage;