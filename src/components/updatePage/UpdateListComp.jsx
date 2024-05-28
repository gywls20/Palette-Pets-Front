// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../styles/update/UpdateList.css";

const UpdateListComp = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-4">
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-red-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 3일 전 • 738 • 12</div>
            </div>
            <div className="post-comments">8</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-red-500">
                업데이트 제목
              </div>
              <div className="post-meta">관리자 • 24.05.17 • 2.6K • 17</div>
            </div>
            <div className="post-comments">5</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 9분 전 • 3 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 14분 전 • 3 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 41분 전 • 17 • 1</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 42분 전 • 7 • 0</div>
            </div>
            <div className="post-comments">0</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 1시간 전 • 20 • 1</div>
            </div>
            <div className="post-comments">1</div>
          </div>
        </div>
        <div className="post">
          <div className="flex justify-between items-center">
            <div>
              <div className="post-title text-blue-500">업데이트 제목</div>
              <div className="post-meta">관리자 • 1시간 전 • 23 • 0</div>
            </div>
            <div className="post-comments">1</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UpdateListComp;
