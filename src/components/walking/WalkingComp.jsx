import React, { useState } from 'react';
import "../../styles/walking/WalkingPage.css";

const WalkingComp = () => {
    const [activeTab, setActiveTab] = useState('pick');

    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto p-4">
                <div className="flex border-b">
                    <button
                        onClick={() => setActiveTab('pick')}
                        className={`px-4 py-2 ${activeTab === 'pick' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
                    >
                        반려생활 Pick
                    </button>
                    <button
                        onClick={() => setActiveTab('recommend')}
                        className={`px-4 py-2 ${activeTab === 'recommend' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
                    >
                        추천플레이스
                    </button>
                </div>
                <div className={activeTab === 'pick' ? "tab-content active" : "tab-content"}>
                    <div className="mt-4">
                        <div className="flex mb-4">
                            <img src="https://source.unsplash.com/random/100x100" alt="여수" className="w-24 h-24 mr-4"/>
                            <div>
                                <h3 className="text-lg font-bold">여수 1박2일 여행</h3>
                                <p>이렇게 가면 끝!</p>
                                <p className="text-gray-500">2024.06.03</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activeTab === 'recommend' ? "tab-content active" : "tab-content"}>
                    <div className="mt-4">
                        <div className="flex mb-4">
                            <img src="https://source.unsplash.com/random/100x100" alt="드림" className="w-24 h-24 mr-4"/>
                            <div>
                                <h3 className="text-lg font-bold">드림 썸머 바베큐 파티</h3>
                                <p>대박 썸머바베큐</p>
                                <p className="text-gray-500">2024.06.01</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalkingComp;