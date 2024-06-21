import React, { useState } from 'react';
import { getReportMember, reportAddRequest } from '../../../service/reportApi';

const ArticleReport = (props) => {
    const {articleId,reportedId,reportHandleClose} =props

    const [content, setContent] = useState('');
    const [selected, setSelected] = useState("토픽 선택");
    const onInput = (e) => {
        const { value } = e.target;
        setContent(value);
        
    }
    const handleSelect = (e) => {
        setSelected(e.target.value);
      };

    const reportSubmit = async (e) =>{
        e.preventDefault();
        const memberId = await getReportMember();
     
        const result = await reportAddRequest(memberId,selected,reportedId,content,articleId);
        alert(result)
        reportHandleClose();
        
    }
    return (
        <>

            <div>
                <label htmlFor="reason">신고 사유</label>
                <select name="reportReason" id="reason" onChange={handleSelect}>

                    <option value='부적절한 언어 포함'>부적절한 언어 포함</option>
                    <option value='불법 정보를 포함하고 있습니다.'>불법 정보를 포함하고 있습니다.</option>
                    <option value='개인정보 노출 게시물 입니다.'>개인정보 노출 게시물 입니다.</option>
                    <option value='스팸 홍보/ 도배글 입니다.'>스팸 홍보/ 도배글 입니다.</option>
                    <option value='부적절한 사진 포함'>부적절한 사진 포함</option>
                    <option value='청소년에게 유해한 내용입니다.'>청소년에게 유해한 내용입니다.</option>

                </select>
            </div>

            <div>
                작성자
                <div>{reportedId}</div>
                신고 내용
                <div>
                    <input type='text' value={content} onChange={onInput} />
                    <button onClick={reportSubmit} >신고 하기</button>
                    <button onClick={reportHandleClose}>취소</button>
                </div>
            </div>

        </>
    );
};

export default ArticleReport;