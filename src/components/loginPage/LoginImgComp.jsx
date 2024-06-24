import ImgStyle from '../../styles/img.module.css';
// import LoginImage from '../../image/login/login.jpg';
import LoginImage from '/src/image/header/logo.png';

const LoginImgComp = () => {
    return (
        <div
            style={{ backgroundColor: "white", width: "100%" }}
        >
            <div className={ImgStyle.imageToolLoginImg}>
                <img src={LoginImage} alt="Login" className={ImgStyle.imageLoginImg}/>
            </div>
            <div>
                <h3>로그인</h3>
            </div>
        </div>
    );
};

export default LoginImgComp;