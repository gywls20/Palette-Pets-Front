import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet} from "react-router-dom";
import BackBtnLayout from "../../layouts/BackBtnLayout.jsx";

const HotSpotPage = () => {

    return (
        <BackBtnLayout>
            <Outlet/>
        </BackBtnLayout>
    );
}

export default HotSpotPage;