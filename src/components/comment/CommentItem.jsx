import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentResisterForm from './CommentResisterForm';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Menu, MenuItem } from '@mui/material';

export default function CommentItem({ parentId, commentRef, articleId, content, create_who, created_At  }) {

    const padding = commentRef === 1 ? 7 : commentRef >= 2 ? 12 : 0

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {

        setExpanded(!expanded);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <>
            <Card sx={{ maxWidth: 640, width: '100%', borderBottom: '0.5px solid rgba(0,0,0, 0.12)', boxShadow: '0' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src='https://i.namu.wiki/i/HwzuYllF4gHU_dZFiiY_HyWlOwZMQ5ixa-aJTx06uduXH6NJUY0_-6TjvwUxneI8NOuc1TpDuXMqY1VEV4sk8zN1ySv9eMQ2r1IXqMLRU3WLYAG56z6sjn0TNTd76PV_cROhAqn-R3DVPWj313W8tQ.webp' />
                    }
                    action={
                        <IconButton id="basic-button" aria-label="settings" onClick={handleClick} >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={commentRef > 2 ? `@대댓글 ${create_who}` : create_who}
                    subheader={created_At}

                    sx={{ textAlign: 'left', marginLeft: padding }}
                />
                <CardContent sx={{ textAlign: 'left', marginLeft: padding }}>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ marginLeft: padding }}>
                   
                        <IconButton aria-label="comment" onClick={handleExpandClick}  >
                            {expanded ? <InsertCommentIcon /> : <CommentOutlinedIcon />}
                        </IconButton>
                    
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <CommentResisterForm commentRef={commentRef + 1} articleId={articleId} parentId={parentId} />
                    </CardContent>
                </Collapse>
            </Card>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',

                }}
                disableScrollLock={true}
            >
                <MenuItem onClick={handleClose}>수정하기</MenuItem>
                <MenuItem onClick={handleClose}>삭제하기</MenuItem>
            </Menu>
        </>
    );
}