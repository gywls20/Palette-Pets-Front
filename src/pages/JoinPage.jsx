// eslint-disable-next-line no-unused-vars
import React from 'react';

import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import WelcomeImg from '../test/join/WelcomeImg.jsx';
import JoinForm from '../test/join/JoinForm.jsx';

const JoinPage = () => {
    return (
            <>
                <br/>
                <br/>
                <br/>
                <HomeDefaultLayout>
                    <WelcomeImg/>
                    <JoinForm/>
                </HomeDefaultLayout>
                <br/>
                <br/>
                <br/>
        </>
    );
};

export default JoinPage;