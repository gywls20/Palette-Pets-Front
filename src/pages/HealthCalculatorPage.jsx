import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import PetAge from '../test/main/PetAge';

const HealthCalculatorPage = () => {
    return (
        <>
        <DefaultLayout>
           <PetAge />
        </DefaultLayout>
    </>
    );
};

export default HealthCalculatorPage;