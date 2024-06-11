// eslint-disable-next-line no-unused-vars
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Outlet } from "react-router-dom";


const AriticlePage = () => {

    
    return (
       
          <>              
              <DefaultLayout>
                
             

                    <Outlet />

               

              </DefaultLayout>
               
          </>

       
    );
};

export default AriticlePage;