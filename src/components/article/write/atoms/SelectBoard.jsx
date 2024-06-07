import React, { memo, useMemo } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const communityBoardList = [

    { idx: 1, boardName: '자유게시판', boardValue: 'FREEBOARD' },
    { idx: 2, boardName: '정보게시판', boardValue: 'INFORMATION' },
    { idx: 3, boardName: '자랑게시판', boardValue: 'SHOW' },
    { idx: 4, boardName: '질문게시판', boardValue: 'QNA' }

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