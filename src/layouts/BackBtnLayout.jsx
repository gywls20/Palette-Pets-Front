import FooterNoCreateIcon from "./FooterNoCreateIcon.jsx";
import BackBtnHeader from "./BackBtnHeader.jsx";

const BackBtnLayout = ({ children }) => {
    return (
        <>
            <br/>
            <br/>
            <BackBtnHeader />
            {children}
            <FooterNoCreateIcon />
            <br/>
            <br/>
        </>
    );
}

export default BackBtnLayout;