import Header from "./Header.jsx";
import FooterNoCreateIcon from "./FooterNoCreateIcon.jsx";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <br/>
            <br/>
            <Header />
            {children}
            <FooterNoCreateIcon />
            <br/>
            <br/>
        </>
    );
}

export default DefaultLayout;