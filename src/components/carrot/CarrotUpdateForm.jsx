import React, { useState } from 'react';
import '../../styles/carrot/CarrotForm.css';


const CarrotUpdateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleImageUpload = (e) => setImages([...images, e.target.files[0]]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 데이터를 서버에 전송하는 로직 추가
  };

    return (
        <form className="write-post-form" onSubmit={handleSubmit}>
            <h2 >내 물건 수정하기</h2>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="상품 설명을 입력하세요"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">거래 방식</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="">선택</option>
            <option value="electronics">판매</option>
            <option value="furniture">구매</option>
            <option value="clothing">나눔</option>
            <option value="clothing">산책</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">가격</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="￦ 가격을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">이미지</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
        <button type="submit" className="submit-button">
          수정 완료
        </button>
      </form>
    );
};

export default CarrotUpdateForm;