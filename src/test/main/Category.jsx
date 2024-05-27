import React from 'react';

import CategoryStyle from '../css/category.module.css'
import PetsIcon from '@mui/icons-material/Pets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faBone, faDog, faHouseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SelectTags from '../../components/article/write/atoms/SelectTags';
import { Link } from 'react-router-dom';

const Category = () => {
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

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faLocationDot} className={CategoryStyle.iconColumn} style={{color: "#002ee6",}} />
                        <span> 산책</span>
                    </button>
                </Link>

                <Link to='#'>
                    <button className={CategoryStyle.iconButtonColumn}>
                    <FontAwesomeIcon icon={faBone} className={CategoryStyle.iconColumn} />
                        <span> 사료 주기</span>
                    </button>
                </Link>

                <Link to='https://tools.mypetlife.co.kr/calculator/age'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <PetsIcon className={CategoryStyle.iconColumn} style={{color: "#9a4a09",}}/>
                        <span> 우리아이의 나이는</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Category;