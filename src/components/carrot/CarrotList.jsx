import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/carrot/CarrotList.css';
import carrotService from '../../service/carrotService';
import CarrotSearch from './CarrotSearch';
import { useNavigate } from 'react-router-dom';


function CarrotList() {
    const navigate = useNavigate();
  //초기화 설정
  const [carrot, setCarrot] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("carrotId");
  const [dir, setDir] = useState(true); //오름차순
  const [where, setWhere] = useState("");
  const [keyword, setKeyword] = useState("");
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log("board page search changed = " + where);
    setWhere(where);
    setPage(1); // search 값이 들어오면 페이지를 1로 초기화(Page = 1일 때만 조회가 되기 때문)
    setCarrot([]); // articles를 초기화
    fetchCarrot(true);
  }, [where, sort])

  const fetchCarrot = (reset = false, keyword = '') => {
    const pageToFetch = reset ? 1 : page;
    if (keyword) {
        carrotService.getSearchList(keyword).then((res) => {
            console.log("keyword ="+res.data);
          setCarrot(res.data);
        }).catch((err) => {
          console.log(err);
        });
      }else {
    carrotService.getCarrotList(pageToFetch, sort, dir, where).then((res) => {
      console.log(res);
      setCarrot((carrot) => (reset ? res.data : [...carrot, ...(res.data)]));
      //setPage(page => page + 1);
      setPage((page) => pageToFetch + 1);
    })
      .catch((err) => { console.log(err) });
    }
  };

    //무한 페이징
    useEffect(() => {
        // inView가 true 일때만 실행한다.
        if (inView && page > 1) {
          console.log(inView);
          fetchCarrot();
        }
    }, [inView]);
      

  const handleCardClick = () => {
    navigate('/carrot/details');
  }

  const handleWriteClick = () => {
    navigate('/carrot/post');
  };

  // 정렬
  const SortChange = (sortValue, dirValue) => {
    setSort(sortValue);
    setDir(dirValue);
    setPage(1);
    //setCarrot([]);
    // fetchCarrot(true);
};

// 태그
const WhereChange = (whereValue) => {
    setWhere(whereValue);
}


  return (
    <div className="product-list-container">
      <div id="header_content">
        <form onsubmit={() => {
            //event.preventDefault();
            fetchCarrot(keyword);
        }}>
          <input class="search_input" 
          type="text" 
          placeholder="물품을 검색해보세요" 
          style={{marginRight:'10px'}}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" class="chat_button">검색하기</button>
        </form>
        {/* <CarrotSearch/> */}
      </div>
      <div class="filter-buttons-container">
        <div class="filter-buttons">
                <button className="filter-button me-4" onClick={() => WhereChange('')}>전체</button>
                <button className="filter-button me-4" onClick={() => WhereChange('판')}>판매</button>
                <button className="filter-button me-4" onClick={() => WhereChange('구')}>구매</button>
                <button className="filter-button me-4" onClick={() => WhereChange('나')}>나눔</button>
                <button className="filter-button me-4" onClick={() => WhereChange('산')}>산책</button>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"black"}}>
            정렬
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => SortChange('carrot_price', true)}>가격 높은 순</Dropdown.Item>
            <Dropdown.Item onClick={() => SortChange('carrot_price', false)}>가격 낮은 순</Dropdown.Item>
            <Dropdown.Item onClick={() => SortChange('carrotLike', true)}>인기순</Dropdown.Item>
            <Dropdown.Item onClick={() => SortChange('carrot_createdAt', false)}>오래된 순</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        {
            carrot.map(carrot =>
                <div className="product-item-container" onClick={handleCardClick}>
                <div className="product-item" ket={carrot.carrotId}>
                    <img src={`https://kr.object.ncloudstorage.com/palettepets/carrot/img/${carrot.img}`} alt="이미지" className="product-image" />
                    <div className="product-info">
                        <h3 className="product-name">{carrot.carrotTitle}</h3>
                        <p className="product-location">{getTimeDifference(carrot.carrot_createdAt)}</p>
                        <p className="product-price">{carrot.carrot_price}원</p>
                        <div className="product-interactions">
                        <span className="like">
                            <i className="fas fa-heart"></i>
                            <span className="like-count">관심 {carrot.carrotLike}</span>
                            <span className="chat-count">채팅 ?</span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
            <div ref={ref}></div>
        </div> 
        <button onClick={handleWriteClick}>글쓰기</button>
    </div>
  );

  //날짜 형식 변경
  function getTimeDifference(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInSeconds = Math.floor((now - created) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds}초 전`;
    } else if (diffInSeconds < 3600) {
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        return `${diffInMinutes}분 전`;
    } else if (diffInSeconds < 86400) {
        const diffInHours = Math.floor(diffInSeconds / 3600);
        return `${diffInHours}시간 전`;
    } else {
        const diffInDays = Math.floor(diffInSeconds / 86400);
        return `${diffInDays}일 전`;
    }
}
};

export default CarrotList;
