import { useState } from "react"; 
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useArticleImageUpload } from "../context/ArticleImageUploadContext";


const boardList = [
    {idx:1,boardName:"공지사항",boardValue:'NOTICE'},
    {idx:2,boardName:"자유게시판", boardValue:'FREEBOARD'},
    {idx:3,boardName:"반려동물 자랑",boardValue:'PETINTORODUCE'},
    {idx:4,boardName:"반려동물 관련 정보",boardValue:'PETINFO'},
    {idx:5,boardName:"반려동물 산책 추천",boardValue:'PETWALKING'},
    {idx:6,boardName:"장소 추천", boardValue:'PETPLACE'}


]

const SelectBoard = () => {
    const articleImageUploadContext = useArticleImageUpload();
    const {boardName,boardNameChange} = articleImageUploadContext;

    

  
    return (
        <>

            <Box sx={{ minWidth: 120}}>
                <FormControl sx={{m:2, width:"80%"}}>
                    <InputLabel id="demo-simple-select-label">게시판 선택</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={boardName}
                        inputProps={{MenuProps: {disableScrollLock: true}}}
                        label="게시판 선택"
                        onChange={boardNameChange}
                        
                    >
                        {
                            boardList.map(item => 
                                <MenuItem key={item.idx} value={item.boardValue}>{item.boardName}</MenuItem>
                            )
                        }
                    
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default SelectBoard;