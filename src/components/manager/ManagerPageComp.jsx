// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { styled } from '@mui/system';
import "../../styles/managerPage/ManagerPage.css";

const TabButton = styled('button')`
    border: none;
    padding: 10px 20px;
    background-color: ${({ isActive }) => (isActive ? '#f0ece3' : 'transparent')};
    color: ${({ isActive }) => (isActive ? 'grey' : 'black')};
    cursor: pointer;
`;

const BoardContent = styled('div')`
    padding: 20px;
    border: 1px solid #ccc;
`;

const ManagerPageComp = () => {
    const TabData = [
        { button: '신고내역', content: '여기에 신고 내용이 표시됩니다.' },
        { button: '조치현황', content: '여기에 조치 내용이 표시됩니다.' },
    ];

    const [activeTab, setActiveTab] = useState(0);

    //초기화 설정
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('articleId'); 
    const [asc, setAsc] = useState(true); //오름차준
    const [hasMore, setHasMore] = useState(true); // 추가 데이터를 불러올 수 있는지 여부(스크롤 사용)
  
    useEffect(() => {
      fetchArticles();
      // 스크롤 이벤트 리스너 등록
      window.addEventListener('scroll', handleScroll);
      return () => {
        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // 페이지가 로드될 때 한 번만 실행
  
    const fetchArticles = () => {
      if (!hasMore) return;
  
      ArticleService.getArticleList(page, sort, asc).then((res) => {
        if (res.data.length > 0) {
          setArticles(Articles => [...Articles, ...res.data]);
          setPage(Page => Page + 1);
        } else {
          setHasMore(false);
        }
      }).catch(error => {
        console.error("Error fetching articles:", error);
      });
    };
  
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) return;
      fetchArticles();
    };

  
    return (
        <>
            <div className={"notice"}>
                {TabData.map((tab, index) => (
                    <TabButton
                        key={index}
                        isActive={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.button}
                    </TabButton>
                ))}
            </div>
            <BoardContent>
                {TabData[activeTab].content}
            </BoardContent>
        </>
    );
};

export default ManagerPageComp;