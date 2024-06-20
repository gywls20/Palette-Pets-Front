import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import carrotService from '../../service/carrotService';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const CarrotMenu = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    //삭제
    const handleDelete = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const result = carrotService.deleteCarrot(id);
            if(result) {
                alert('글 삭제에 성공했습니다.')
                navigate(-1); // 이전 페이지로 이동
            } else {
                alert('지금은 삭제할 수 없습니다. 다시 시도해주세요')
            }
        }
        handleMenuClose(setAnchorEl);
      };

    return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuOpen}
        sx={{ marginLeft: '20px', marginTop: '20px', display: 'flex', fontSize: '15pt' }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={() => navigate(`/carrot/update/${id}`)}>수정하기</MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>삭제하기</MenuItem>
      </Menu>
    </div>
    );
};

export default CarrotMenu;