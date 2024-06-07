import { Avatar } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../../comment/CommentList';
import './App.css'
const ArticleView = () => {

    const articleId = useParams();


  // 상태 변수 설정
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // 새로운 댓글 추가 함수
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment('');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        {/* 유저 정보 */}
        <div className="user-info">
          <div className="profile-pic"></div>
          <div className="username">닉네임</div>
          <div className="time-ago">몇분 전</div>
          <div className="likes">❤️ 3</div>
        </div>
        {/* 포스트 내용 */}
        <div className="post">
          <div className="title">제목</div>
          <div className="content">내용</div>
        </div>
        {/* 댓글 섹션 */}
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-username">닉네임</div>
              <div className="comment-text">{comment.text}</div>
              <div className="comment-actions">
                <span>1분 전</span>
                <span>👍 좋아요 4</span>
                <span>💬 대댓글</span>
                <span>🚩 신고</span>
              </div>
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="reply">
                  <div className="reply-username">닉네임</div>
                  <div className="reply-text">{reply.text}</div>
                  <div className="reply-actions">
                    <span>0분 전</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* 댓글 작성란 */}
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글 작성 하는 곳"
          />
          <button onClick={handleAddComment}>댓글 추가</button>
        </div>
      </header>
    </div>
  );
};

export default ArticleView;