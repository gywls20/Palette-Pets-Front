import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React,{memo} from 'react';

const InputContent = memo(({ content, onChange }) => {
    
    return (
        <>
             <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-multiline-static"
                    name="content"
                    label="내용"
                    multiline
                    rows={10}
                    value={content}
                    onChange={onChange}
                />
            </Box>
  
        </>
    );
});

export default InputContent;