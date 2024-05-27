import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import PatAge from '../test/main/PatAge';

const HealthCalculatorPage = () => {
    return (
        <>
        <DefaultLayout>
           <PatAge />
        </DefaultLayout>
    </>
    );
};

export default HealthCalculatorPage;