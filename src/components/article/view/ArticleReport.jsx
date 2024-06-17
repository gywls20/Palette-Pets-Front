import React, { useState } from 'react';

const ArticleReport = () => {

    const [content, setContent] = useState('');
    const onInput = (e) => {
        const { value } = e.target;
        setContent(value);
    }

    return (
        <>

            <div>
                <label for="reason">신고 사유</label>
                <select name="reportReason" id="reason">

                    <option value='aa'>부적절한 언어 포함</option>
                    <option value='aa'>불법 정보를 포함하고 있습니다.</option>
                    <option value='aa'>개인정보 노출 게시물 입니다.</option>
                    <option value='aa'>스팸 홍보/ 도배글 입니다.</option>
                    <option value='aa'>부적절한 사진 포함</option>
                    <option value='aa'>청소년에게 유해한 내용입니다.</option>

                </select>
            </div>

            <div>
                작성자
                <div>ㅇㅇㅇ</div>
                신고 내용
                <div>
                    <input type='text' value={content} onChange={onInput} />
                    <button >신고 하기</button>
                </div>
            </div>

        </>
    );
};

export default ArticleReport;