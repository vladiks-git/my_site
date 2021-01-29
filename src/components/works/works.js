import React from 'react';
import './works.scss'
import ItemWorks from "./itemWorks/itemWorks";

const Works = () => {
    return (
        <div className={'works-wrap'}>
            <div className={'works-content'}>
                <ItemWorks/>
            </div>
        </div>
    );
};

export default Works;