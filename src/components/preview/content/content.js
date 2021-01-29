import React from 'react';
import './content.scss'
import imgComp from '../../../img/Frame.svg'
import Button from "../../ui/button/button";

const Content = () => {
    return (
        <div className={'wrapper'}>
            <div className={'imgComp'}>
                <img src={imgComp}/>
            </div>
            <div className={'info'}>
                <span>Дизайн и верстка</span>
                <div className={'sub-title'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae doloribus ducimus eligendi eveniet iste magni perspiciatis quasi quibusdam quidem, sapiente sequi similique sint. </div>
                <Button mt={'60px'} title={'Написать мне'}/>
            </div>
        </div>
    );
};

export default Content;