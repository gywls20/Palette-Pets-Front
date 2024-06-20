// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import {BottomNavigation, BottomNavigationAction, CssBaseline, IconButton, Paper,} from "@mui/material";
import {Home, KeyboardArrowUp, VolunteerActivism} from "@mui/icons-material";
import ForumIcon from "@mui/icons-material/Forum.js";
import PeopleIcon from "@mui/icons-material/People.js";
import PetsIcon from "@mui/icons-material/Pets.js";
import "./../styles/layout/footer.css"

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 현재 경로에 따라 value 설정
    switch (true) {
      case location.pathname === "/":
        setValue(0);
        break;
      case location.pathname === "/chat":
        setValue(1);
        break;
      case location.pathname === "/board":
        setValue(2);
        break;
      case /^\/carrot(\/.*)?$/.test(location.pathname):
        setValue(3);
        break;
      case /^\/hotspot(\/.*)?$/.test(location.pathname):
        setValue(4);
        break;
      default:
        setValue();
    }
  }, [location.pathname]);

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    // 새로운 값에 따른 경로로 이동
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/chat');
        break;
      case 2:
        navigate('/board');
        break;
      case 3:
        navigate('/carrot');
        break;
      case 4:
        navigate('/hotspot/list');
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
            <BottomNavigationAction label="Home" icon={<Home />}/>
            <BottomNavigationAction label="채팅" icon={<ForumIcon />}/>
            <BottomNavigationAction label="커뮤니티" icon={<PeopleIcon />} />
            <BottomNavigationAction label="거래" icon={<VolunteerActivism/>}/>
            <BottomNavigationAction label="플레이스" icon={<PetsIcon />} />
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
