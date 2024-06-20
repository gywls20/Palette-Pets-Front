import {useSelector} from "react-redux";
import "./../../styles/pet/petPage.css"
import {Outlet} from "react-router-dom";
import BackBtnLayout from "../../layouts/BackBtnLayout.jsx";

const PetPage = () => {
    const token = useSelector((state) => state.MemberSlice.token);

    return (
        <>
            <BackBtnLayout>
                <Outlet />
            </BackBtnLayout>
        </>
    );
};

export default PetPage;