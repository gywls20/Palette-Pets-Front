import React from 'react';
import WelcomeImgComp from '../components/joinPage/WelcomeImgComp.jsx';
import JoinFormComp from '../components/joinPage/JoinFormComp.jsx';
import DefaultLayout from "../layouts/DefaultLayout.jsx";

const JoinPage = () => {
    return (
            <>
                <br/>
                <br/>
                <br/>
                <DefaultLayout>
                    <WelcomeImgComp/>
                    <JoinFormComp/>
                </DefaultLayout>
                <br/>
                <br/>
                <br/>
        </>
    );
};

export default JoinPage;