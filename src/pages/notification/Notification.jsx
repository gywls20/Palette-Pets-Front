import NotificationList from "../../components/notification/NotificationList.jsx";
import BackBtnLayout from "../../layouts/BackBtnLayout.jsx";

const Notification = () => {

    return (
        <>
            <BackBtnLayout>
                <NotificationList/>
            </BackBtnLayout>
        </>
    );
}

export default Notification;