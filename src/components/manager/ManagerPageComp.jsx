// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { styled } from '@mui/system';
import "../../styles/managerPage/ManagerPage.css";

const TabButton = styled('button')`
    border: none;
    padding: 10px 20px;
    background-color: ${({ isActive }) => (isActive ? '#f0ece3' : 'transparent')};
    color: ${({ isActive }) => (isActive ? 'grey' : 'black')};
    cursor: pointer;
`;

const BoardContent = styled('div')`
    padding: 20px;
    border: 1px solid #ccc;
`;

const ManagerPageComp = () => {
    const TabData = [
        { button: '신고내역', content: '여기에 신고 내용이 표시됩니다.' },
        { button: '조치현황', content: '여기에 조치 내용이 표시됩니다.' },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className={"notice"}>
                {TabData.map((tab, index) => (
                    <TabButton
                        key={index}
                        isActive={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.button}
                    </TabButton>
                ))}
            </div>
            <BoardContent>
                {TabData[activeTab].content}
            </BoardContent>
        </>
    );
};

export default ManagerPageComp;