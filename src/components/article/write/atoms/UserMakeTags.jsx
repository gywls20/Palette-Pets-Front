import { Box, Button, Chip, Container, Stack } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useArticleImageUpload } from '../context/ArticleImageUploadContext';

const UserMakeTags = () => {
  
    const articleImageUploadContext = useArticleImageUpload();

    const {select,setSelect} = articleImageUploadContext;

    const [tagName, setTagName] = useState('');

    const seqRef = useRef(select.length);

    const onDelete = (tag) => {

        setSelect(select.filter(item => item !== tag))

    }

    const onInput = () => {
        if(select.length > 3){
            alert('태그는 4개 까지 추가 가능합니다.')    
        }else{
            tagName && setSelect([...select, tagName])
            setTagName('');
        }
    }
    return (

        <div className='userMakeTags' style={{}}>
         
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'inline-flex', alignItems: 'center', width:"80%" }}
            >
                <Box>&emsp;</Box>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="#"
                    // inputProps={{ 'aria-label': '' }}
                    value={tagName}
                    onChange={(e)=>setTagName(e.target.value)}
                   
                />
                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AddIcon onClick={onInput}/>
                </IconButton>

            </Paper>
            <Box></Box>
            <Box sx={{ display: 'inline-flex', flexWrap: 'wrap',gap:0.8 ,alignItems:'left'} }>
                <Chip label='ex) #고양이' variant="outlined" sx={{marginTop:2, marginBottom:2}}/>
                {select.map((item, index) => (

                    <div key={index}>

                        <Stack direction="row" spacing={1} marginTop={2} marginBottom={2} >

                            <Chip label={item} variant="outlined" onDelete={() => onDelete(item)} />

                        </Stack>

                    </div>

                ))}
            </Box>



        
        </div>
    );
};

export default UserMakeTags;