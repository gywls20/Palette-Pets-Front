import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

const ManagerPageComp = () => {
    const navigate = useNavigate()

    const handleClickReport = useCallback(() => {
        navigate('/manager/reportList');
    });

    const handleClickHistory = useCallback(() => {
        navigate('/manager/historyList');
    });

    return(
            <div className="">
                <div className="" onClick={handleClickReport}>신고 내역</div>
                <div className="" onClick={handleClickHistory}>조치 현황</div>
            </div>
    );
};

export default ManagerPageComp;