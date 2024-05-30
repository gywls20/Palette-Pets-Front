import React, { useEffect, useRef } from 'react';
import "../../styles/walking/WalkingPage.css";

const WalkingComp = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=j1x9ap3dif';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            const mapOptions = {
                center: new window.naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 10
            };
            const map = new window.naver.maps.Map(mapRef.current, mapOptions);
        };
    }, []);

    return (
        <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
    );
};

export default WalkingComp;