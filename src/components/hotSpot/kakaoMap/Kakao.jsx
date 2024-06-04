import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const { kakao } = window;

const KEYWORD_LIST = [
    { id: 1, value: '애견카페', emoji: '☕️' },
    { id: 2, value: '동물병원', emoji: '🧑‍⚕️' },
    { id: 3, value: '애견호텔', emoji: '🏨' },
];

const Kakao = () => {

    // 기본 위치 설정 지정
    const [state, setState] = useState({
        center: {
            lat: 39.01935385275867,
            lng: 125.75090408114178,
        },
        errMsg: null,
        isLoading: true,
    });

    // 현재 사용자 위치 받아오기 (geolocation)
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setState((prev) => ({
    //                     ...prev,
    //                     center: {
    //                         lat: position.coords.latitude,
    //                         lng: position.coords.longitude,
    //                     },
    //                     isLoading: false,
    //                 }));
    //             },
    //             (err) => {
    //                 setState((prev) => ({
    //                     ...prev,
    //                     errMsg: err.message,
    //                     isLoading: false,
    //                 }));
    //             },
    //         );
    //     } else {
    //         setState((prev) => ({
    //             ...prev,
    //             errMsg: 'geolocation을 사용할수 없어요..',
    //             isLoading: false,
    //         }));
    //     }
    // }, []);


    return (
        <>
            {/* 지도 컴포넌트 */}
            <Map
                center={state.center}
                style={{ width: '100%', height: '400px', marginTop: '48px' }}
                level={3}
            >

                {/* 현재 위치 마커 표시 */}
                <MapMarker
                    position={state.center}
                    image={{
                        src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
                        size: {
                            width: 50,
                            height: 50,
                        },
                    }}
                />

                {/* 검색된 장소 마커 표시 */}
                {/*{search.map((data) => (*/}
                {/*    <MapMarker*/}
                {/*        key={data.id}*/}
                {/*        position={{ lat: data.y, lng: data.x }}*/}
                {/*        image={{*/}
                {/*            src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',*/}
                {/*            size: {*/}
                {/*                width: 35,*/}
                {/*                height: 35,*/}
                {/*            },*/}
                {/*        }}*/}
                {/*    />*/}
                {/*))}*/}
            </Map>
        </>
    );
};

export default Kakao;