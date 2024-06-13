import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet} from "react-router-dom";

const HotSpotPage = () => {

    return (
        <DefaultLayout>
            <Outlet/>
        </DefaultLayout>
    );
}

export default HotSpotPage;