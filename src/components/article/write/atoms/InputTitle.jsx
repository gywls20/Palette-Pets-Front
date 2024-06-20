import { useState, memo, useEffect } from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DEFAULT_HEAD_LIST = [
    [
        { idx: 1, headName: '자유' },
        { idx: 2, headName: '일상' },
        { idx: 3, headName: '이야기' },
        { idx: 4, headName: '공유' },
    ],
    [   
        { idx: 1, headName: '정보' },
        { idx: 2, headName: '꿀팁' },
        { idx: 3, headName: '뉴스' },
        { idx: 4, headName: '지식' },
    ],
    [
        { idx: 1, headName: '자랑' },
    ],
    [
        { idx: 1, headName: '질문' },
        { idx: 2, headName: '문의' },
        { idx: 3, headName: '궁금' },
        { idx: 4, headName: '상담' }
    ]
]

const InputTitle = memo(({ boardName, title, articleHead, onChange,onInput }) => {
    
    const [headList, setHeadList] = useState([]);
    

    useEffect(() => {
        onInput({
            name:"articleHead",
            value:''
        })
        switch (boardName) {    
            case 'FREEBOARD':
                return setHeadList(DEFAULT_HEAD_LIST[0])
            case 'INFORMATION':
                return setHeadList(DEFAULT_HEAD_LIST[1])
            case 'SHOW':
                return setHeadList(DEFAULT_HEAD_LIST[2])
            case 'QNA':
                return setHeadList(DEFAULT_HEAD_LIST[3])
        }


    }, [boardName])

   

    return (
        <>
            <div style={{ margin: "3px 0" }}>


                <FormControl sx={{ m: 1, width: "19%" }}>
                    <InputLabel id="select-head">머리말 선택</InputLabel>
                    <Select
                        labelId="select-head"
                        id="select-head"
                        name="articleHead"
                        value={`${articleHead}`}
                        inputProps={{ MenuProps: { disableScrollLock: true } }}
                        label="머리말 선택"
                        onChange={onChange}
                    >
                        {
                            headList.map(item =>
                                <MenuItem key={item.idx} value={item.headName}>{item.headName}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-basic"
                    name="title"
                    label="제목"
                    variant="outlined"
                    value={title}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                        }
                    }}
                    sx={{ m: 1, width: '59%' }}
                />
            </div>

        </>
    );
});

export default InputTitle;
