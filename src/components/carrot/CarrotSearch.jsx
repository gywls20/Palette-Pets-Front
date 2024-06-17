import React from 'react';
import '../../styles/carrot/CarrotList.css';


const CarrotSearch = () => {
    return (
        <div id="header_content">
        <form onsubmit="submitForm(event)">
          <input class="search_input" type="text" placeholder="물품을 검색해보세요" style={{marginRight:'10px'}}/>
          <button type="submit" class="chat_button">검색하기</button>
        </form>
      </div>
    );
};

export default CarrotSearch;