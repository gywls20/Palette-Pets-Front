import React, { memo, useEffect, useState } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Chip, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const UserMakeTags = memo(({ tags, onInput }) => {

    const [tagName, setTagName] = useState('');
    
    
   

    const onAddList= ()=>{
        if(tagName === ''){
            return alert('태그를 입력해 주세요')
        }
        
        onInput({name:'tags',value:[...tags,tagName]}); 
        setTagName('');
    }   

    const onDelList = (tag)=>{
        
        onInput({name:'tags',value:tags.filter(item => item != tag)});
    }

    return (

        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'inline-flex', alignItems: 'center', width: "80%" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="#"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    onKeyDown={(e) => {
                        //엔터키 눌렀을때 태그가 들어가도록
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          setTagName(e.target.value)
                        }
                    }}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AddIcon onClick={()=>onAddList()}/>
                </IconButton>

            </Paper>
            <br />
            <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', gap: 0.8, alignItems: 'left' }}>

                <Chip label='ex) #고양이' variant="outlined" sx={{ marginTop: 2, marginBottom: 2 }} />

                {tags && tags.map((item, index) => (

                    <div key={index}>

                        <Stack direction="row" spacing={1} marginTop={2} marginBottom={2} >

                            <Chip label={item} variant="outlined" onDelete={()=>onDelList(item)} />

                        </Stack>

                    </div>

                ))}
            </Box>

        </>
    );
});

export default UserMakeTags;