import React, { memo, useMemo } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const communityBoardList = [
    {idx:1,boardName:"공지사항",boardValue:'NOTICE'},
    {idx:2,boardName:"자유게시판", boardValue:'FREEBOARD'},
    {idx:2,boardName:"병원",boardValue:'NOTICE'},
    {idx:2,boardName:"미용",boardValue:'PETINTORODUCE'},
    {idx:2,boardName:"산책",boardValue:'PETINFO'},
    {idx:2,boardName:"반려동물 산책 추천",boardValue:'PET'},
    {idx:3,boardName:"반려동물 자랑",boardValue:'PETINTORODUCE'},
    {idx:4,boardName:"반려동물 관련 정보",boardValue:'PETINFO'},
    {idx:5,boardName:"반려동물 산책 추천",boardValue:'PETWALKING'},
    {idx:6,boardName:"장소 추천", boardValue:'PETPLACE'}
]


const SelectBoard = memo(({boardName,onChange}) => {
   
   
    return (
        <>
                <FormControl sx={{ m: 2, width: "80%" }}>
                    <InputLabel id="select-board">게시판 선택</InputLabel>
                    <Select
                        labelId="select-board"
                        id="select-board"
                        defaultValue={boardName}
                        name="boardName"
                        value={boardName}
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        label="게시판 선택"
                        onChange={onChange}
                        
                    >
                        {
                            communityBoardList.map(item =>
                                <MenuItem key={item.idx} value={item.boardValue}>{item.boardName}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
               
                
           
        </>
    );
});

export default SelectBoard;