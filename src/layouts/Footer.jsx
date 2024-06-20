// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
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
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 현재 경로에 따라 value 설정
    switch (location.pathname) {
      case "/chat":
        setValue(0);
        break;
      case "/pet/list":
        setValue(1);
        break;
      case "/":
        setValue(2);
        break;
      case "/carrot":
        setValue(3);
        break;
      case "/hotspot":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // 새로운 값에 따른 경로로 이동
    switch (newValue) {
      case 0:
        navigate('/chat');
        break;
      case 1:
        navigate('/pet/list');
        break;
      case 2:
        navigate('/');
        break;
      case 3:
        navigate('/carrot');
        break;
      case 4:
        navigate('/hotspot');
        break;
      default:
        break;
    }
  };

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <BottomNavigationAction label="Archive" icon={<Archive />} />
            <BottomNavigationAction label="PetList" icon={<Favorite />} />
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Market" icon={<VolunteerActivism />} />
            <BottomNavigationAction label="Location On" icon={<LocationOn />} />
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
