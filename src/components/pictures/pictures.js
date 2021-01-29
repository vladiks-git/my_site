import React from 'react';
import './pictures.scss'
import lists from '../../img/Rectangle 7.svg'
import pc from '../../img/Rectangle 7.3.svg'
import view from '../../img/view.svg'


const Pictures = () => {
    return (
        <div className={'images'}>
            <div className={'overlay'}>
                <img src={pc}/>
            </div>

            <div className={'overlay'}>
                <img src={lists}/>
            </div>
            <div className={'overlay'}>
                <img src={pc}/>
            </div>
            <div className={'overlay'}>
                <img src={lists}/>
            </div>
        </div>
    );
};

export default Pictures;