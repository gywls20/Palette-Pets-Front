import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet} from "react-router-dom";

const CarrotPage = () => {

    return (
        <DefaultLayout>
            <Outlet/>
        </DefaultLayout>
    );
}

export default CarrotPage;