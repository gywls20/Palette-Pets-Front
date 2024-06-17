import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/carrot/CarrotForm.css';
import carrotService from '../../service/carrotService';
import useForm from '../../hooks/useForm';
import { Button } from '@mui/material';
import { formatDate } from 'date-fns';
import ImageUpdate from './ImageUpdate';

const form = {
    carrotTitle : '',
    carrotContent : '',
    carrotTag : '',
    carrot_price : ''
  }

const CarrotPostForm = () => {
    const navigate = useNavigate();
    const [reset] = useForm(form);
    const [imgList, setImgList] = useState([]);

  const [carrotTitle, setCarrotTitle] = useState('');
  const [carrotContent, setCarrotContent] = useState('');
  const [carrotTag, setCarrotTag] = useState('');
  const [carrot_price, setCarrot_price] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 폼 데이터를 서버에 전송하는 로직 추가

    const formData = new FormData();
    formData.append('carrotTitle', carrotTitle);
    formData.append('carrotContent', carrotContent);
    formData.append('carrotTag', carrotTag);
    formData.append('carrot_price', carrot_price);
    files.forEach((files) => {
      formData.append('files', files);
    });

    try {
        
        await carrotService.postCarrotWrite(formData);
        console.log("폼데이터2@= ", Object.fromEntries(formData.entries()));
        alert('글 등록에 성공했습니다.');
        navigate(-1); // 이전 페이지로 이동
      } catch (error) {
        // 글 작성 실패 시 오류 처리 로직 작성
        alert('글 작정에 실패했습니다. 다시 시도해주세요.');
        console.error('Error writing carrot:', error);
      }
    };

    return (
        <form className="write-post-form" onSubmit={handleSubmit}>
            <h2 >내 물건 팔기</h2>
        <div className="form-group">
          <label>제목</label>
          <input
            type="text"
            id="carrotTitle"
            value={carrotTitle}
            onChange={(event) => setCarrotTitle(event.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label>설명</label>
          <textarea
            id="carrotContent"
            value={carrotContent}
            onChange={(event) => setCarrotContent(event.target.value)}
            placeholder="상품 설명을 입력하세요"
          ></textarea>
        </div>
        <div className="form-group">
          <label>거래 방식</label>
          <select id="carrotTag" value={carrotTag} onChange={(event) => setCarrotTag(event.target.value)}>
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
            placeholder="￦ 가격을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label>이미지</label>
          <ImageUpdate imgList={imgList} setImgList={setImgList}/>
        </div>
        <button type="submit" className="submit-button" onClick={() => handleSubmit(formatDate)}>
          작성 완료
        </button><br/>
        <button type="reset" className="submit-button">다시 작성</button>
      </form>
    );
};

export default CarrotPostForm;