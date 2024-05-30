// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import "../../styles/walking/WalkingPage.css";

const WalkingComp = () => {
    const mapRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소

    useEffect(() => {
        if (isModalOpen) {
            const script = document.createElement('script');
            script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=j1x9ap3dif';
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                const mapOptions = {
                    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
                    zoom: 10
                };

                // 모달이 열릴 때 지도 인스턴스 생성
                const map = new window.naver.maps.Map(mapRef.current, mapOptions);

                // 지도 크기 재조정
                window.naver.maps.Event.once(map, 'init_stylemap', () => {
                    setTimeout(() => {
                        map.updateSize();
                        map.setZoom(map.getZoom());
                    }, 0);
                });
            };
        }
    }, [isModalOpen]); // isModalOpen 상태가 변경될 때마다 이 useEffect를 실행


    const handleSearch = () => {
        setIsModalOpen(true); // 검색 버튼 클릭 시 모달 열기
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 지도에서 장소 선택 시 호출될 함수
    const selectPlace = (address) => {
        setSelectedAddress(address); // 선택된 주소 상태 업데이트
        closeModal(); // 모달 닫기
    };

    return (
        <div>

            {isModalOpen && (
                <div className="modal" style={{
                    position: 'fixed',
                    top: '20%',
                    left: '32%',
                    zIndex: 100,
                    border: '1px solid #000',
                    borderRadius: '10px',
                }}>
                    <div ref={mapRef} style={{width: '600px', height: '400px'}}></div>
                    <button onClick={closeModal}>닫기</button>
                </div>
            )}
            <div className="search">
                {selectedAddress && <p>선택된 주소: {selectedAddress}</p>}
                <button onClick={handleSearch}>지역 검색</button>
            </div>
        </div>
    );
};

export default WalkingComp;