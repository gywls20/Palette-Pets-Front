import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const WriteBtnLayout = ({ children }) => {
    return (
        <>
            <br/>
            <br/>
            <Header />
            {children}
            <Footer />
            <br/>
            <br/>
        </>
    );
}

export default WriteBtnLayout;