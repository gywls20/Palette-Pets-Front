import { Box, Container } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './ImageWithCloseIcon.css';
import ArticleImageEdit from './ArticleImageEdit';



const ArticleImageUploadComp = () => {

    const [userUploadDTO, setUserUploadDTO] = useState({
        imageIndex: '',
        imageFileName: '',
        imageOriginFileName: ''
    });

    const { imageIndex, imageFileName, imageOriginFileName } = userUploadDTO;
    
    const [imgList, setImgList] = useState([]); //span에 미리보기로 뿌려줄 이미지 정보
    const [files, setFiles] = useState([]); // 파일 정보 Files -> 유사 객체 배열 -> 배열로 얕게 복사
    const imgRef = useRef(); //trigger 사용을 대체할 ref
    console.log(files)
    const onCamera = () => {
        imgRef.current.click();
    }

    const onImageInput = (e) => {
      
        // 이미 업로드한 List와 업로드 할 사진의 개수가 4개 이상일 때 
        if ((imgList.length + e.target.files.length) > 4) {
            alert('최대 개수는 3개 입니다.')
        } else {
            // 여러개의 파일 선택 -> Array로 저장
            const uploadFiles = Array.from(e.target.files)
            
            var imgArray = [...imgList];
            //URL 을 만들어 imgArray에 저장
            var filesArray = [];
            uploadFiles.map((item, index) => {
                
                const objectURL = URL.createObjectURL(item);
                const isDuplicate = files.some(img => img.name === item.name );
                
                if (!isDuplicate) {
                    imgArray.push(objectURL);
                    filesArray.push(item);
                }else{
                    alert('동일한 사진은 1장씩만 가능합니다.'+item.name)
                }
            }
            )
            // 미리보기로 뿌려줄 파일 저장
            setImgList(imgArray);
            // File의 정보 저장 -> 중복 검사 and ObjectStorage , Db 저장용
            setFiles(files.concat(filesArray));
        }
        
        e.target.value='';
        // 마지막 저장된 파일 value 삭제로 남겨두면 같은 사진이 중복으로 올라갈 수 있다.
        // 그러나 파일을 지울때 지우는 파일이 e.target.value 값과 같으면 올라가지 않는다.
        // 중복 처리를 다시 해주어야 함 AI 중복 처리 
    }

    
    const deleteChoiceImage = (choiceIndex) => {
        
        if (window.confirm("삭제하시겠습니까?")) {
            const deleteUrl = imgList[choiceIndex]
            const newImgList = imgList.filter((item, index) => index !== choiceIndex);
            const newFiles = files.filter((item,index) => index !== choiceIndex);
        
            setImgList(newImgList)
            setFiles(newFiles)
            window.URL.revokeObjectURL(deleteUrl);
            // 메모리 누수 방지
        }
    }

    

    return (
        <>
            <Container sx={{marginTop:2}}>

                <span>사진 추가 (최대 4장)</span>

                <Box sx={{ minWidth: 200, display: 'block',marginTop:2 }}>

                    {

                        
                        imgList.map((item, index) =>
                            <div className='image-container '>
                                <img src={item} alt={index} className="image" width='80' height='80' />
                              
                            </div>
                        )
                    }
                    <div className='image-container inputImage-container'>
                        <AddPhotoAlternateOutlinedIcon onClick={onCamera} sx={{ width: '80px', height: '80px', margin:'0',display:'block'}} />
                    </div>
                </Box>
                <input type="file" name="img[]" multiple='multiple' ref={imgRef} style={{ visibility: 'hidden' }}
                    onChange={onImageInput}
                />
                <Box>
                   
                    <ArticleImageEdit imgList={imgList} setImgList={setImgList} files={files} setFiles={setFiles} deleteChoiceImage={deleteChoiceImage}/>
                </Box>
            </Container>
        </>
    );
};

export default ArticleImageUploadComp;