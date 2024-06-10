import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentResisterForm from '../../comment/CommentResisterForm';
import { getUpdateArticle } from '../../../service/ArticleService';
import { getComment } from '../../../service/commentApi';
import CommentItem from '../../comment/CommentItem';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ArticleView = () => {

  const { articleId } = useParams();

  const [articleDto, setArticleDto] = useState({});
  const [commentDto, setCommentDto] = useState([]);

  const { articleTags, content, countLoves, countReview, created_who, memberImage, title, images } = articleDto
  console.log(articleDto)
  const [isArticleSubmitted, setIsArticleSubmitted] = useState(false);

  //댓글 등록


  //articleId 글 정보, 이미지 정보, 댓글 정보 받아오기
  const [formattedDateTime, setFormattedDateTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {

      const articleData = await getUpdateArticle(articleId)
      const commentData = await getComment(articleId)
      setArticleDto(articleData);
      setCommentDto(commentData);

      const dateTime = new Date(articleData.createdAt);
      const nowTime = new Date();

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
    }
    fetchData();

  }, [isArticleSubmitted])

  //수정 삭제 메뉴 handler
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }




  return (
    <>

      <Card sx={{ maxWidth: 630, border: 'none', margin: '20px auto' }}>
        <IconButton aria-label="history back" sx={{ marginLeft: '20px', marginTop: '20px', display: 'flex', fontSize: '15pt' }} onClick={handleBack}>
          <ArrowBackIcon />
          뒤로
        </IconButton>
        <CardHeader
          avatar={
            <Avatar alt={created_who} src={memberImage} />
          }
          action={
            <IconButton aria-label="basic-menu" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={created_who}
          subheader={formattedDateTime}
          sx={{ textAlign: 'left', marginLeft: '50px', marginTop: '20px' }}
        />

        <CardContent >
          <Typography variant="body2" color="text.secondary" fontSize="20pt" textAlign='left' marginLeft='50px'>
            {title}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="body2" color="text.secondary" fontSize='15pt' textAlign='left' marginLeft='50px' >
            {content}
          </Typography>
        </CardContent>
        {
          images && images.map((item, index) => <CardMedia
            component="img"

            height="250px"
            image={`https://kr.object.ncloudstorage.com/palettepets/article/img/${item.imgUrl}`}
            alt={index}
            sx={{ width: '250px', margin: '20px auto', border: '1px solid black', borderRadius: '20px', padding: '20px' }}
          />)
        }

        <CardActions disableSpacing sx={{ marginLeft: '50px', marginBottom: '20px' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
            {countLoves}
          </IconButton>
        </CardActions>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          
          }}
        >
          <MenuItem onClick={handleClose}>수정하기</MenuItem>
          <MenuItem onClick={handleClose}>삭제하기</MenuItem>
         
        </Menu>
      </Card>
          



      <div style={{ marginBottom: '10px', padding: '10px', textAlign: 'left', borderBottom: '0.5px solid rgba(0,0,0, 0.12)', boxShadow: '0' }}>&emsp; 댓글 {countReview}</div>
      {
        commentDto && commentDto.map((item) =>

          <CommentItem key={item.articleCommentId} item={item} articleId={articleId} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />
        )
      }

      <footer>

        <CommentResisterForm commentRef={0} articleId={articleId} parentId={0} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />

      </footer>
    </>
  );
};

export default ArticleView;