import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import {Outlet} from "react-router-dom";
import {HotSpotProvider} from "../../components/hotSpot/HotSpotContext.jsx";

const HotSpotPage = () => {

    return (
        <DefaultLayout>
            <HotSpotProvider>
            <Outlet/>
            </HotSpotProvider>
        </DefaultLayout>
    );
}

export default HotSpotPage;