import {BottomNavigation, BottomNavigationAction, CssBaseline, Paper} from "@mui/material";
import {Archive, Favorite, LocationOn, Restore} from "@mui/icons-material";
import {useState} from "react";

const Footer = () => {

    const [value, setValue] = useState(0);

    return (
        <>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<Restore />} />
                    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                    <BottomNavigationAction label="Archive" icon={<Archive />} />
                    <BottomNavigationAction label="LocationOn" icon={<LocationOn />} />
                </BottomNavigation>
            </Paper>
        </>
    )
}

export default Footer;