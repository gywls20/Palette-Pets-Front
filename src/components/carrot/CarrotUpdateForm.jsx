import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import carrotService from '../../service/carrotService';
import ImageUpdate from './ImageUpdate';
import '../../styles/carrot/CarrotForm.css';


const CarrotUpdateForm = () => {
  const navigate = useNavigate();

  const {id} = useParams();
  const [carrot, setCarrot] = useState([]);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetchCarrot(id);
    console.log("carrotId = "+ id)
  }, [id]);

  const fetchCarrot = (id) => {
    console.log("id = "+id)
    carrotService.getCarrotDetails(id).then((res) => {
      console.log(res.data);
      setCarrot(res.data);
      //setPage(page => page + 1);
      }).catch((err) => { 
        console.log(err)
      });
    }


  const [carrotTitle, setCarrotTitle] = useState('');
  const [carrotContent, setCarrotContent] = useState('');
  const [carrotTag, setCarrotTag] = useState('');
  const [carrot_price, setCarrot_price] = useState('');
  const [files, setFiles] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
  // 사용자가 새로 입력한 값이 있는 경우 FormData에 추가
  if (carrotTitle !== '') {
    formData.append('carrotTitle', carrotTitle);
  } else {
    formData.append('carrotTitle', carrot.carrotTitle);
  }

  if (carrotContent !== '') {
    formData.append('carrotContent', carrotContent);
  } else {
    formData.append('carrotContent', carrot.carrotContent);
  }

  if (carrotTag !== '') {
    formData.append('carrotTag', carrotTag);
  } else {
    formData.append('carrotTag', carrot.carrotTag);
  }

  if (carrot_price !== '') {
    formData.append('carrot_price', carrot_price);
  } else {
    formData.append('carrot_price', carrot.carrot_price);
  }
  // 이미지 파일 추가
  files.forEach((file) => {
    formData.append('files', file);
    });

    try {
      const result = await carrotService.putCarrotUpdate(formData, id);
      if (result !== null) {
          alert('글 수정에 성공했습니다.')
          navigate(-1); // 이전 페이지로 이동
      } else {
          alert('글 수정에 실패했습니다. 다시 시도해주세요.');
      }
      console.log("폼데이터2@= ", Object.fromEntries(formData.entries()));
    } catch (error) {
      // 글 작성 실패 시 오류 처리 로직 작성
      alert('글 수정에 실패했습니다. 다시 시도해주세요.');
      console.error('Error writing carrot:', error);
    }
  };

    return (
        <form className="write-post-form" onSubmit={handleSubmit}>
            <h2 >내 물건 수정하기</h2>
        <div className="form-group">
          <label>제목</label>
          <input
            type="text"
            id="carrotTitle"
            value={carrotTitle}
            onChange={(event) => setCarrotTitle(event.target.value)}            
            placeholder={carrot.carrotTitle}
          />
        </div>
        <div className="form-group">
          <label>설명</label>
          <textarea
            id="carrotContent"
            value={carrotContent}
            onChange={(event) => setCarrotContent(event.target.value)}
            placeholder={carrot.carrotContent}
          ></textarea>
        </div>
        <div className="form-group">
          <label>거래 방식</label>
          <select id="carrotTag" value={carrotTag || carrot.carrotContent} onChange={(event) => setCarrotTag(event.target.value)}>
            <option value="">선택</option>
            <option value="판매">판매</option>
            <option value="구매">구매</option>
            <option value="나눔">나눔</option>
            <option value="산책">산책</option>
          </select>
        </div>
        <div className="form-group">
          <label>가격</label>
          <input
            type="text"
            id="carrot_price"
            value={carrot_price}
            onChange={(event) => setCarrot_price(event.target.value)}
            placeholder={carrot.carrot_price}
          />
        </div>
        <div className="form-group">
        <label>이미지</label>
          <img src={`https://kr.object.ncloudstorage.com/palettepets/carrot/img/${carrot.img}`} alt="First slide" height="200" width="280" />
          <ImageUpdate imgList={imgList} setImgList={setImgList}/>
        </div>
        <button type="submit" className="submit-button" onClick={() => handleSubmit(formatDate)}>
          수정 완료
        </button><br/>
        <button type="reset" className="submit-button">다시 작성</button>
      </form>
    );
};

export default CarrotUpdateForm;