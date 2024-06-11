import {Link} from "react-router-dom";
import Kakao from "./kakaoMap/Kakao.jsx";

const HotSpotDetails = () => {

    return (
        <>
            <div>
                <h1>핫스팟 상세보기</h1>
                <Link to="/hotspot/">목록으로</Link>
                <Kakao />
            </div>
        </>
    );
}

export default HotSpotDetails;