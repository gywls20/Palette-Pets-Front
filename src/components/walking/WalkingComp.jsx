/* global naver */
import React, { useEffect, useRef, useState } from 'react';
import "../../styles/walking/WalkingPage.css";

const WalkingComp = () => {
    const mapRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [mapPoint, setMapPoint] = useState({ x: null, y: null });

    useEffect(() => {
        const loadMapScript = () => {
            const scriptId = 'naver-maps-script';
            let script = document.getElementById(scriptId);

            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=j1x9ap3dif';
                script.async = true;

                document.head.appendChild(script);

                script.onload = () => {
                    if(window.naver && window.naver.maps) {
                        initializeMap();
                    } else {
                        console.error('네이버 지도 API 로드 실패');
                    }
                };

                script.onerror = () => {
                    console.error('네이버 지도 API 스크립트 로드 실패');
                };
            } else if(window.naver && window.naver.maps) {
                // 지도 초기화 진행
                initializeMap();
            } else {
                script.addEventListener('load', initializeMap);
            }
        };

        if (isModalOpen) {
            loadMapScript();
        }
    }, [isModalOpen]);

    const initializeMap = () => {
        if (!window.naver || !window.naver.maps) {
            console.error('네이버 지도 API 로드 실패');
            return;
        }

        const mapOptions = {
            center: new window.naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
            draggable: true,
            disableTwoFingerTapZoom: true,
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOptions);

        window.naver.maps.Event.addListener(map, 'click', function (e) {
            const position = e.coord;
            placeMarkerAndPanTo(position, map);
            setMapPoint({ x: position.x, y: position.y });

            // 좌표를 이용하여 주소 가져오기
            if(window.naver.maps.Service) {
                window.naver.maps.Service.reverseGeocode({
                    coords: position,
                    orders: [
                        naver.maps.Service.OrderType.ADDR,
                        naver.maps.Service.OrderType.ROAD_ADDR
                    ].join(',')
                }, function(status, response) {
                    if (status !== naver.maps.Service.Status.OK) {
                        console.error('주소를 가져오는 데 에러가 발생했습니다.');
                        setSelectedAddress('주소를 찾을 수 없습니다.');
                        return;
                    }

                    const item = response.v2.addresses[0];
                    const address = `${item.roadAddress} ${item.jibunAddress}`;
                    setSelectedAddress(address);
                });
            } else {
                console.error('naver.maps.Service 객체를 찾을 수 없습니다.');
            }
        });
    };

    const placeMarkerAndPanTo = (position, map) => {
        new window.naver.maps.Marker({
            position: position,
            map: map,
            animation: window.naver.maps.Animation.DROP,
        });
        map.panTo(position);
    };

    const handleSearch = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {isModalOpen && (
                <div className="modal">
                    <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
                    <button className={"closeButton"} onClick={closeModal}>X</button>
                </div>
            )}
            <div className="search">
                <button onClick={handleSearch}>산책로 검색</button>
                {selectedAddress && <p>선택된 주소: {selectedAddress}</p>}
            </div>
        </div>
    );
};

export default WalkingComp;