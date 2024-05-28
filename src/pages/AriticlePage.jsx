// eslint-disable-next-line no-unused-vars
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const AriticlePage = () => {

    
    return (
       
          <>              
              <DefaultLayout>
                
              <>

                <Box>

                    <Outlet />

                </Box>
                
              </>

              </DefaultLayout>
               
          </>

       
    );
};

export default AriticlePage;