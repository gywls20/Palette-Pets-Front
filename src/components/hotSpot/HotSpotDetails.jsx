import {Link} from "react-router-dom";
import Kakao from "./kakaoMap/Kakao.jsx";
import {useEffect, useState} from "react";

const HotSpotDetails = () => {

    const [hotspots, setHotspots] = useState([]);

    useEffect(() => {
        // axios로 핫스팟 정보 가져오기
        const dummy = [
            {
                id: 1,
                lat: 30,
                lng: 30,
                title: 'zz',
                content: 'asdfasdf'
            }
        ];
        setHotspots(dummy);
    }, []);

    return (
        <>
            <div>
                <h1>핫스팟 상세보기</h1>
                <Link to="/hotspot/">목록으로</Link>
                {
                    hotspots.map((hotspot) => {
                        // 컴포넌트
                        <>
                            <h1>${hotspot.id}</h1>
                        </>
                    })
                }
                <Kakao />
            </div>
        </>
    );
}

export default HotSpotDetails;