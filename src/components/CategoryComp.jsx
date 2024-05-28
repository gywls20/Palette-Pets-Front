import React from 'react';

import CategoryStyle from '../styles/category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faBone, faDog, faHouseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SelectTags from './article/write/atoms/SelectTags';
import { Link } from 'react-router-dom';

const CategoryComp = () => {
    return (
        <>
            <div>
                <SelectTags/>
            </div>

            <div className={CategoryStyle.iconsBar}>
                <Link to='/board'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 인기</span>
                    </button>
                </Link>

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 최신순</span>
                    </button>
                </Link>

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 자유게시판</span>
                    </button>
                </Link>

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faLocationDot} className={CategoryStyle.iconColumn} style={{color: "#002ee6",}} />
                        <span> 산책</span>
                    </button>
                </Link>               
            </div>
                
            <div className={CategoryStyle.iconsBar}>
                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faHouseMedical} className={CategoryStyle.iconColumn} style={{color: "#ff0000",}} />
                        <span> 병원</span>
                    </button>
                </Link>

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faDog} className={CategoryStyle.iconColumn} style={{color: "#9a4a09",}} />
                        <span> 미용</span>
                    </button>
                </Link>
               
                <Link to='/healthCalculatorPage'>
                    <button className={CategoryStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faBone} className={CategoryStyle.iconColumn} />
                        <span> 건강 계산기</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CategoryComp;