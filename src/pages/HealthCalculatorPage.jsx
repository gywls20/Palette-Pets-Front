import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import PetAge from '../components/PetAgeComp';

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