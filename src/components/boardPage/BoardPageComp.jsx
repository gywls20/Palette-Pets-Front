// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "../../styles/board/BoardList.css"
import PetCategory from "../PetCategoryComp.jsx";
import ArticleService from '../../service/ArticleService.jsx';
import { useLocation } from 'react-router-dom';
import BoardPageItem from './BoardPageItem.jsx';
import { Stack } from '@mui/system';
import { Chip } from '@mui/material';


function BoardPageComp() {

  const [search, setSearch] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [boardName, setBoardName] = useState('');

  //URL에서 sort 값 가져오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortParam = queryParams.get("sort");

  //초기화 설정
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(sortParam);
  //const [sort, setSort] = useState(sortParam || 'articleId'); 
  const [dir, setDir] = useState(true); //오름차순
  const [where, setWhere] = useState(""); //검색
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log("board page search changed = " + search);
    setWhere(search);
    setPage(1); // search 값이 들어오면 페이지를 1로 초기화(Page = 1일 때만 조회가 되기 때문)
    setArticles([]); // articles를 초기화
    fetchArticles(dir);
  }, [search, sort, boardName,dir])

  useEffect(() => {
    if (sortParam) {
      setSort(sortParam); // 쿼리 파라미터에서 sort 값을 읽어 설정
      setArticles([]);
      setPage(1);
    };
  }, [sortParam]);


  const fetchArticles = (reset = false) => {

    const searchString = search.map(item => item).join(',');

    const pageToFetch = reset ? 1 : page;
    ArticleService.getArticleList(pageToFetch, sort, dir, searchString, boardName).then((res) => {
      console.log("where =@!@!@!@!@" + search);
      // console.log(res);

      const resultString = res.data.map(obj => obj.articleTags).join(',')
      const arrayWithoutDuplicateFromResult = [...new Set(resultString.split(','))];

      setTagList(tagList => reset ? arrayWithoutDuplicateFromResult : [...tagList, ...(arrayWithoutDuplicateFromResult)]);
      setArticles(articles => reset ? res.data : [...articles, ...(res.data)]);
      
      //setPage(page => page + 1);
      setPage(page => pageToFetch + 1);
    })
      .catch((err) => { console.log(err) });
  };

  //무한 페이징
  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView && page > 1) {
      console.log(inView)
      fetchArticles();
    }
  }, [inView]);

  const addBoardName = (event) => {
    event.preventDefault();
    const { value } = event.target
    console.log(boardName)
    console.log(value)

    if(boardName === value){
      setBoardName('');
    }
    else{
    setBoardName(value)
    }
  }

  const addSearch = (tag) => {

    if (!search.includes(tag)) {
      console.log('aaaaaa')
      setSearch([...search, tag])
    }

  }

  const delSearch = (tag) => {
    setSearch(search.filter(item => item !== tag))
  }

  const onReset = ()=>{
    setBoardName('')
    setSearch([])
    setTagList([])
  }
  return (
    <>
      <div className='header'>
        <div className='searchInput'>
          {/* <input type='text' value={search} /> */}
        </div>
        <div className='boardSelectBtn'>
          <button className='round-button' onClick={onReset}>전체</button>
          <button className={boardName === "FREEBOARD" ? "round-button active" : "round-button"} value="FREEBOARD" onClick={addBoardName}>자유</button>
          <button className={boardName === "INFORMATION" ? "round-button active" : "round-button"} value="INFORMATION" onClick={addBoardName}>정보</button>
          <button className={boardName === "SHOW" ? "round-button active" : "round-button"} value="SHOW" onClick={addBoardName}>자랑</button>
          <button className={boardName === "QNA" ? "round-button active" : "round-button"} value="QNA" onClick={addBoardName}>QNA</button>
        </div>

        <div className='tagList'>

          {

            tagList.map((item, index) =>
              item !== '' ?
                <Stack direction="row" spacing={1} key={index} sx={{ display: 'inline-block', margin: '10px' }}>
                  <Chip label={item} variant="outlined" onClick={() => addSearch(item)} />
                </Stack>
                : null

            )
          }
        </div>
        <div className='selectedTagList'>
          {
            search && search.map((item, index) =>

              <Stack direction="row" spacing={1} sx={{ display: 'inline-block', margin: '10px' }} key={index}>

                <Chip label={item} variant="outlined" onDelete={() => delSearch(item)} />

              </Stack>
            )
          }

        </div>
      </div>


      <hr />
      <main className="container mx-auto px-4 py-4">
        <div style={{textAlign:'right'}}><button onClick={()=>setDir(true)}>최신순</button> / <button onClick={()=>setDir(false)}>오래된순</button></div>
        {
          articles.map(articles =>
            <BoardPageItem key={articles.articleId} article={articles} />
          )
        }
        <div ref={ref}>끝</div>
      </main>
    </>
  );
};

export default BoardPageComp;