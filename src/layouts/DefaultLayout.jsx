import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
}

export default DefaultLayout;