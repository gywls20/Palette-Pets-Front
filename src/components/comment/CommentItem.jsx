import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentResisterForm from './CommentResisterForm';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Menu, MenuItem } from '@mui/material';
import { set } from 'date-fns';

export default function CommentItem({item,articleId,setIsArticleSubmitted,isArticleSubmitted}) {
    
    const { articleCommentId, children, content, memberImage, memberNickname, updateAt} = item
   
    const [formattedDateTime, setFormattedDateTime] = useState('');

    const dateTime = new Date(updateAt);
    const nowTime = new Date();

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    useEffect(() => {
        let time = "";
        if (dateTime.getDate !== nowTime.getDate) {
            time = `${dateTime.getFullYear()}.${(dateTime.getMonth() + 1).toString().padStart(2, '0')}.${dateTime.getDate().toString().padStart(2, '0')} 
                                  ${dateTime.getHours().toString().padStart(2, '0')}시
                                  ${dateTime.getMinutes().toString().padStart(2, '0')}분`;
        }
        else {
            time = `${dateTime.getFullYear()}.${(dateTime.getMonth() + 1).toString().padStart(2, '0')}.${dateTime.getDate().toString().padStart(2, '0')} `;
        }

        // 연.월.일 시 분 형식으로 포맷
        setFormattedDateTime(time);
        setExpanded(false)
    }, [item])

   

    return (
        <>

            <Card sx={{ maxWidth: 620, margin:'auto' ,borderBottom: '0.5px solid rgba(0,0,0, 0.12)', boxShadow: '0' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="memberImage" src={memberImage} />
                    }
                    action={
                        <IconButton id="basic-button" aria-label="settings" >
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={memberNickname}
                    subheader={formattedDateTime}

                    sx={{ textAlign: 'left' }}
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>

                    <IconButton aria-label="comment" onClick={handleExpandClick}>
                        <InsertCommentIcon />
                    </IconButton>

                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <CommentResisterForm commentRef={articleCommentId} articleId={articleId} parentId={articleCommentId} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />
                    </CardContent>
                </Collapse>
            </Card>
          
            <div style={{marginLeft:20}}>
                {
                    children && children.length > 0 &&
                        <div style ={{marginLeft:20}}>
                            {   
                                children.map((childItem,index) =>(
                                    <CommentItem key={index} item={childItem} articleId={articleId} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />
                                ))
                            }
                        </div>
                } 
            </div>
        </>
    );
}