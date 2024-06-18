import React, { useState } from 'react';
import styled from "@emotion/styled";
import '../../styles/carrot/CarrotForm.css';


const ImageUpdate = () => {
    const [imgList, setImgList] = useState([]);

    const onImgSelected = (e) => {
        console.log(e);
        let now = new Date();
        let id = now.toString(); // -> '2021-09-09T10:00:00'
        let reader = new FileReader(); //객체 생성
        reader.readAsDataURL(e.target.files[0]); //내가 선택한 파일을 읽어주는 함수 

        reader.onload = () => { //이미지가 url로 만들어진 후에 실행되는 함수
            console.log(reader.result); //이미지가 url로 만들어짐
            setImgList([...imgList, { id, previewUrl: reader.result, originFile: e.target.files[0] }]);  
        }
    }

    const onImgChanged = (id, e) => {
        let cpy = JSON.parse(JSON.stringify(imgList)); //문자열로 바꾸고 다시 객체로 바꾸면 복제본이 생성된다.

        let target = cpy.find((e) => { //복제본을 넣어준다.
            return e.id === id;
        }); //복제본을 넣고, find 함수로 id가 같은것을 찾으면 taget이라는 이름으로 . 

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]); //미리보기 url. 어떤url을 미리보기할건지()안에 넣어줘야한다. 그래서, e.target.files[0] --> 사용자가 업로드한 이미지 파일
        reader.onload = () => { //다 읽어지면(완료가되면) 실행되는 함수
            target.previewUrl = reader.result; //previewUrl -> 미리보기 바꾸고,
            target.originFile = e.target.files[0]; //origin -> 원본파일도 바꾸고
            setImgList(cpy); //setImgList에서, cpy원본으로 바꿔줘
        }
    }

    const onImgDelete = (id) => {
        setImgList(imgList.filter((e) => e.id !== id));
    }

    return (
        <div className="form-group">
        <ImgInputWrap>
                    {
                    imgList.map((img) =>
                        <label style={{ position: 'relative' }} key={img.id}>
                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                                src={img.previewUrl} />
                            <input
                                onChange={(e) => onImgChanged(img.id, e)} //받아온 id랑 ,지금받아온 event를 받아옴
                                accept="image/*"
                                type="file" />
                            <button
                                style={{ 
                                    position: 'absolute', 
                                    top: '0', 
                                    right: '0',
                                    width: '40px', // 버튼 width 설정
                                    height: '40px', // 버튼 height 설정
                                    fontSize: '20px', // 버튼 내부 텍스트 크기 설정
                                    padding: '0', // 버튼 내부 여백 제거
                                    opacity: 0.5, // 버튼 투명도 설정
                                    background: 'transparent', // 버튼 배경 투명 설정
                                    border: 'none', // 버튼 테두리 제거
                                }}
                                onClick={() => { onImgDelete(img.id) }}
                                type='button'>X
                            </button>  
                        </label>
                        )
                    }
                    <label>
                        +
                        <input onChange={onImgSelected} accept="image/*" type="file" />
                    </label>
        </ImgInputWrap>
    </div>
    );
};

export default ImageUpdate;


export const ImgInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;

  & label{
    width: 150px;
    height: 150px;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
    font-size: 60px;
    cursor: pointer;

	border: 1px solid silver;
  }

  & label input{
    display: none;
  }
`;