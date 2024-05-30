// eslint-disable-next-line no-unused-vars
import React from 'react';
import DefaultLayout from "../../layouts/DefaultLayout.jsx";
import WalkingComp from "../../components/walking/WalkingComp.jsx";

const WalkingPage = () => {
    return (
        <>
            <DefaultLayout>
                <WalkingComp/>
            </DefaultLayout>
        </>
    );
};

export default WalkingPage;