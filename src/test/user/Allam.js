import React from 'react';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AllamStyle from '../css/allam.module.css'

const Allam = () => {
    return (
        <div className={AllamStyle.container}>
            <header className={AllamStyle.header}>
                <span className={AllamStyle.title}>냥가왈부</span>
                <div className={AllamStyle.icons}>
                    <button className={AllamStyle.iconButton}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Link>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Allam;