import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Typography variant="h4" gutterBottom>
                login
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="아이디" variant="outlined" />
                <TextField label="비밀번호" variant="outlined" type="password" />
                <Button variant="contained" color="primary">
                    로그인
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& > *': { m: 1 },
                }}
            >
                <Button color="primary">N</Button>
                <Button color="primary">K</Button>
                <Button color="primary">G</Button>
            </Box>
        </Box>
    );
};

export default LoginComponent;