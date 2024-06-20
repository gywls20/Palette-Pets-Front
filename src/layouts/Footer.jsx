// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from 'react-redux';

import base64 from 'base-64';
import {
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline,
  Paper,
  IconButton,
} from "@mui/material";
import {
  Archive,
  Favorite,
  LocationOn,
  Home,
  KeyboardArrowUp,
  VolunteerActivism
} from "@mui/icons-material";



const Footer = () => {
  const token = useSelector((state) => state.MemberSlice.token);
  const navigate = useNavigate()
  const [value, setValue] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
  };

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
// JWT 토큰에서 닉네임을 추출하는 함수
const getNicknameFromToken = () => {
  let payload = token.substring(token.indexOf('.')+1,token.lastIndexOf('.'));
  let dec = base64.decode(payload)
  
  let nickname = JSON.parse(dec).memberNickname;
  console.log("dec="+nickname);
  return nickname;
  // navigate(`/member/${nickname}}`);
};
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onHome = () => navigate('/')

  const onPetList = () => {
    navigate('/pet/list');
  }
  const onHotSpot = () => {
    navigate('/hotspot');
  }
  const onCarrot = () => {
    navigate('/carrot');
  }
  const onMypage = () => {
    let nickname = getNicknameFromToken();
    if (nickname) {
      navigate(`/member/${nickname}`);
    } else {
      console.error('닉네임을 추출할 수 없습니다.');
    }
  };
  return (
    <>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <button className="floating-button"></button>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigationChange}>
          <BottomNavigationAction label="mypage" onClick={onMypage}/>
          <BottomNavigationAction label="PetList" icon={<Favorite />} onClick={onPetList} />
          <BottomNavigationAction label="Home" icon={<Home />} onClick={onHome} />
          <BottomNavigationAction label="Market" icon={<VolunteerActivism/>} onClick={onCarrot}/>
          <BottomNavigationAction label="Location On" icon={<LocationOn />} onClick={onHotSpot} />
        </BottomNavigation>
        <Link to="/article/write">
          <button className="floating-button">
            <CreateIcon />
          </button>
        </Link>
      </Paper>
      {showButton && (
        <IconButton
          className={"topButton"}
          onClick={moveToTop}
          aria-label="move to top">
          <KeyboardArrowUp />
        </IconButton>
      )}
    </>
  );
};

export default Footer;
