import React, {useEffect, useState} from 'react';
import { Box, List, ListItem, ListItemText, Card, CardMedia, Typography, Rating, Divider } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import "../../styles/hotspot/hotSpot.css";
import VisibilityIcon from "@mui/icons-material/Visibility.js";
import {getAllHostSpotList} from "../../service/hotSpotApi.jsx";
import BuildIcon from '@mui/icons-material/Build';


const HotSpotList = () => {

    const navigate = useNavigate();

    const [hotSpotList, setHotSpotList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllHostSpotList();
            console.log("data = " , result);
            setHotSpotList(result);
        }

        fetchData();
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
                반려동물와 명소를 방문해보세요
            </Typography>
            <List>
                {hotSpotList.map((hotSpot, index) => (
                    <React.Fragment key={hotSpot.hotSpotId}>
                        <ListItem sx={{ flexDirection: 'column', alignItems: 'center', paddingTop: 3, paddingBottom: 3 }}>
                            <Card sx={{ width: '100%', marginBottom: 2 }}
                                onClick={() => navigate(`/hotspot/details/${hotSpot.hotSpotId}`)}
                            >
                                <CardMedia component="img" height="200" image={hotSpot.imgUrl} alt={hotSpot.placeName} />
                            </Card>
                            <ListItemText
                                primary={hotSpot.placeName}
                                secondary={
                                    <>
                                        <Rating value={hotSpot.rating} precision={0.5} readOnly size="small" />
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {hotSpot.simpleContent}
                                        </Typography>
                                        <Typography variant="" color="text.secondary">
                                            <VisibilityIcon sx={{verticalAlign: 'middle', mr: 0.5}}/> {hotSpot.countViews}
                                        </Typography>
                                    </>
                                }
                                align="center"
                            />
                        </ListItem>
                        {index !== hotSpotList.length - 1 && <Divider variant="middle" />}
                    </React.Fragment>
                ))}
            </List>
            <Link to="/hotspot/write">
                <button className="write-button">
                    <BuildIcon />
                </button>
            </Link>
        </Box>
    );
};

export default HotSpotList;