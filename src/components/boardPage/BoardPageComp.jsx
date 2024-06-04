// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../styles/board/BoardList.css";
import PetCategoryComp from "../PetCategoryComp.jsx";

const BoardPageComp = () => {
  return (
    <>
      <div className="header">
        <PetCategoryComp />
      </div>
      <hr />
      <main className="container mx-auto px-4 py-4">
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-red-500">포동소식 ❤️ 싱긋성</div>
              <div className="post-meta">포동리포터 • 3일 전 • 738 • 12</div>
            </div>
            <div className="post-comments">8</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-red-500">
                진행 중 🐝 포동 X U+우리집들불이
              </div>
              <div className="post-meta">포동리포터 • 24.05.17 • 2.6K • 17</div>
            </div>
            <div className="post-comments">5</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">댓글부탁해</div>
              <div className="post-meta">익명보호자 • 9분 전 • 3 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">사건사고</div>
              <div className="post-meta">익명보호자 • 14분 전 • 3 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">정보공유</div>
              <div className="post-meta">발플레터 • 41분 전 • 17 • 1</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">오산완</div>
              <div className="post-meta">밤이맘 • 42분 전 • 7 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">펫팁</div>
              <div className="post-meta">멍이공 • 1시간 전 • 20 • 1</div>
            </div>
            <div className="post-comments">1</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">공지</div>
              <div className="post-meta">츄맘 • 1시간 전 • 23 • 0</div>
            </div>
            <div className="post-comments">1</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BoardPageComp;
