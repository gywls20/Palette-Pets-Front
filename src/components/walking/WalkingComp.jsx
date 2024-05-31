import React, { useEffect, useRef, useState } from 'react';
import "../../styles/walking/WalkingPage.css";

const WalkingComp = () => {
    const mapRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소

    useEffect(() => {
        if (isModalOpen) {
            const existingScript = document.querySelector(`script[src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}"]`);

            if (!existingScript) {
                const script = document.createElement('script');
                script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
                script.async = true;
                document.head.appendChild(script);

                script.onload = () => {
                    initializeMap();
                };
            } else {
                initializeMap();
            }
        }
    }, [isModalOpen]);

    const initializeMap = () => {
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
            draggable: true,
            disableTwoFingerTapZoom: true,
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        window.naver.maps.Event.addListener(map, 'click', function(e) {
            const position = e.coord;

            placeMarkerAndPanTo(position, map);
        });
    };

    const placeMarkerAndPanTo = (position, map) => {     // 마커를 생성하고 지도에 표시하는 부분
        const marker = new window.naver.maps.Marker({
            position: position,
            map: map,
            animation: window.naver.maps.Animation.DROP,
        });

        map.panTo(position);

        // 리버스 지오코딩으로 주소 가져오기
        const tm128 = window.naver.maps.TransCoord.fromLatLngToTM128(position);
        fetch(`https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${tm128.getX()},${tm128.getY()}&output=json&orders=roadaddr`, {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_API_KEY_ID,
                'X-NCP-APIGW-API-KEY': process.env.REACT_APP_NAVER_API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) { // 주소 정보를 가져와서 출력하는 부분
                    const address = data.results[0].region.area1.name + ' ' +
                        data.results[0].region.area2.name + ' ' +
                        data.results[0].region.area3.name + ' ' +
                        (data.results[0].land.number1 || '') + ' ' +
                        (data.results[0].land.addition0 ? data.results[0].land.addition0.value : '');

                    // 마커 클릭 이벤트 리스너 추가
                    window.naver.maps.Event.addListener(marker, 'click', function() {
                        selectPlace(address);
                    });
                } else {
                    selectPlace('주소를 찾을 수 없습니다.');
                }
            })
            .catch(error => {
                console.error('Error fetching address:', error);
                selectPlace('주소를 찾을 수 없습니다.');
            });
    };

    const handleSearch = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const selectPlace = (address) => {
        setSelectedAddress(address);
        closeModal();
    };

    return (
        <div>
            {isModalOpen && (
                <div className="modal">
                    <div ref={mapRef} style={{width: '100%', height: '100%'}}></div>
                    <button className={"closeButton"} onClick={closeModal}>X</button>
                </div>
            )}
            <div className="search">
                {selectedAddress && <p>선택된 주소: {selectedAddress}</p>}
                <button onClick={handleSearch}>산책로 검색</button>
            </div>
        </div>
    );
};

export default WalkingComp;