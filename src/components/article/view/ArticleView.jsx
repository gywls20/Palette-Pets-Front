import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentResisterForm from '../../comment/CommentResisterForm';
import { getArticleView, increaseLikeCount } from '../../../service/ArticleService';
import { getComment } from '../../../service/commentApi';
import CommentItem from '../../comment/CommentItem';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Menu, MenuItem, Modal, Typography, Box } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArticleDelete from '../delete/ArticleDelete';


//모달창 css
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ArticleView = () => {

  const { articleId } = useParams();

  const [articleDto, setArticleDto] = useState({});
  const [commentDto, setCommentDto] = useState([]);


  const { articleTags, content, countLoves, countReview, created_who, memberImage, title, images,isLike } = articleDto


  //댓글 등록시 리렌더링
  const [isArticleSubmitted, setIsArticleSubmitted] = useState(false);

  //등록 시간 포맷
  const [formattedDateTime, setFormattedDateTime] = useState('');

  const increaseLike = async () => {
    const body = {
      articleId: articleId
    }
    const response = await increaseLikeCount(body);

    alert(response);
    setIsArticleSubmitted(!isArticleSubmitted)
  }


  //articleId 글 정보, 이미지 정보, 댓글 정보 받아오기
  useEffect(() => {
    const fetchData = async () => {

      const articleData = await getArticleView(articleId)
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

  //모달창 handler
  const [openModal, setOpenModal] = useState(false);
  const modalHandleOpen = () => {
    setOpenModal(!openModal)
  };
  const modalHandleClose = () => {
    console.log('aa')
    setOpenModal(false);
  }



  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }


  // 태그 
  const formattedString = articleTags && articleTags.split(',')
    .map(item => `#${item}`)
    .join(' ');


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
          sx={{ textAlign: 'left', margin: '10px 20px' }}
        />

        <CardContent >
          <Typography variant="body2" color="text.secondary" fontSize="20pt" textAlign='left' sx={{ margin: '0 20px' }}>
            {title}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="body2" color="text.secondary" fontSize='15pt' textAlign='left' sx={{ margin: '0 20px' }}>
            {content}
          </Typography>
        </CardContent>
        {
          images && images.map((item, index) => <CardMedia
            key={index}
            component="img"

            height="250px"
            image={`https://kr.object.ncloudstorage.com/palettepets/article/img/${item.imgUrl}`}
            alt={index}
            sx={{ width: '250px', margin: '20px auto', border: '1px solid black', borderRadius: '20px', padding: '20px' }}
          />)
        }

        {formattedString}

        <CardActions disableSpacing sx={{ marginLeft: '20px', marginBottom: '20px' }}>
          <IconButton aria-label="add to favorites" onClick={increaseLike}>
            <FavoriteOutlined sx={{ color: isLike ? 'red' : 'black' }} />

          </IconButton>
          {countLoves}
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
          <MenuItem onClick={() => navigate(`/article/update/${articleId}`)}>수정하기</MenuItem>
          <MenuItem onClick={modalHandleOpen}>삭제하기</MenuItem>

        </Menu>
      </Card>



      <div style={{ marginBottom: '10px', padding: '10px', textAlign: 'left' }}>&emsp; 댓글 {countReview}</div>
      {
        commentDto && commentDto.map((item) =>

          <CommentItem key={item.articleCommentId} item={item} articleId={articleId} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />
        )
      }



      {/* 모달창 */}
      <Modal
        open={openModal}
        onClose={modalHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <div style={{ textAlign: 'center' }}>
            <ArticleDelete articleId={articleId} modalHandleClose={modalHandleClose} />
          </div>
        </Box>
      </Modal>


      <footer>

        <CommentResisterForm memberNickname={created_who} commentRef={0} articleId={articleId} parentId={0} setIsArticleSubmitted={setIsArticleSubmitted} isArticleSubmitted={isArticleSubmitted} />

      </footer>
    </>
  );
};

export default ArticleView;