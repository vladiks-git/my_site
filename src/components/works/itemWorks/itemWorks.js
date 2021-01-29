import React from 'react';
import './itemWorks.scss'
import image from '../../../img/project.svg'

const ItemWorks = () => {
    return (
        <div className={'item-works'}>
            <img src={image}/>
            <div className={''}>
                10+ проектов
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
        </div>
    );
};

export default ItemWorks;