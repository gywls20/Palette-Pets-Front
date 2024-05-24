import React from 'react';

import CategoryStyle from '../css/category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faDog, faHouseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    return (
        <div className={CategoryStyle.iconsBar}>    
            <button className={CategoryStyle.iconButtonColumn}>
                <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                <span>인기</span>
            </button>

            <button className={CategoryStyle.iconButtonColumn}>
                <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                <span>최신순</span>
            </button>

            <button className={CategoryStyle.iconButtonColumn}>
                <FontAwesomeIcon icon={faHouseMedical} className={CategoryStyle.iconColumn} style={{color: "#ff0000",}} />
                <span>병원</span>
            </button>

            <button className={CategoryStyle.iconButtonColumn}>
                <FontAwesomeIcon icon={faDog} className={CategoryStyle.iconColumn} style={{color: "#9a4a09",}} />
                <span>미용</span>
            </button>

            <button className={CategoryStyle.iconButtonColumn}>
                <FontAwesomeIcon icon={faLocationDot} className={CategoryStyle.iconColumn} style={{color: "#002ee6",}} />
                <span>산책</span>
            </button>
        </div>
    );
};

export default Category;