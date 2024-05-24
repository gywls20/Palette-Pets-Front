import React from 'react';

import HomeDefaultLayout from "../layouts/HomeDefaultLayout.jsx";
import WelcomeImg from '../test/join/WelcomeImg.jsx';
import JoinForm from '../test/join/JoinForm.jsx';

const JoinPage = () => {
    return (
        <div>
            <>
            <HomeDefaultLayout>
                <WelcomeImg/>
                <JoinForm/>
            </HomeDefaultLayout>
        </>
        </div>
    );
};

export default JoinPage;