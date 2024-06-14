import React, {useEffect, useState} from 'react';
import { Box, List, ListItem, ListItemText, Card, CardMedia, Typography, Rating, Divider } from '@mui/material';
import {useNavigate} from "react-router-dom";
import "../../styles/hotspot/hotSpot.css";
import VisibilityIcon from "@mui/icons-material/Visibility.js";
import {getAllHostSpotList} from "../../service/hotSpotApi.jsx";


// const hotSpotList = [
//     {
//         id: 1,
//         name: '반려동물 전용 놀이 공원',
//         description: '안알랴줌',
//         rating: 4.5,
//         imageUrl: 'https://article-image.travel.navitime.jp/img/NTJnews0430-ko/0.jpg',
//         countViews: 10
//     },
//     {
//         id: 2,
//         name: '공원',
//         description: '어딘지는 모릅니다',
//         rating: 2.8,
//         imageUrl: 'https://vknfvtjnsgec6381690.cdn.ntruss.com/aboutPet/images/editor/event/202210/ea2d1e45-74c1-42a3-a1b8-0dd884c1f84c.jpg',
//         countViews: 15
//     },
//     {
//         id: 3,
//         name: '공원 2',
//         description: '어딘지는 모릅니다 2',
//         rating: 2.5,
//         imageUrl: 'https://vknfvtjnsgec6381690.cdn.ntruss.com/aboutPet/images/editor/event/202210/ea2d1e45-74c1-42a3-a1b8-0dd884c1f84c.jpg',
//         countViews: 400
//     },
//     {
//         id: 4,
//         name: '공원3',
//         description: '어딘지는 모릅니다 3',
//         rating: 1.2,
//         imageUrl: 'https://vknfvtjnsgec6381690.cdn.ntruss.com/aboutPet/images/editor/event/202210/ea2d1e45-74c1-42a3-a1b8-0dd884c1f84c.jpg',
//         countViews: 20
//     },
// ];

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
        </Box>
    );
};

export default HotSpotList;