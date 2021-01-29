import React from 'react';
import './feedback.scss'
import Input from "../ui/input/input";
import Textarea from "../ui/textarea/textarea";
import Button from "../ui/button/button";

const Feedback = () => {
    return (
        <div className={'feedback-wrapper'}>
            <div className={'feedback'}>
                <span className={'title'}>Хотите веб-сайт?</span>
                <span className={'sub-title'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut consequatur dolorem ea eaque enim esse facilis maxime minus nisi, odit, pariatur quibusdam quidem quos rerum sint ut vel voluptate!</span>
                <div className={'infoUser'}>
                    <Input name={'name'} placeholder={'Ваше имя'} />
                    <Input name={'email'} placeholder={'Email'} />
                </div>
                <div className={'message'}>
                    <Textarea/>
                </div>
                    <Button title={'Отправить'} mt={'50px'}/>
            </div>
        </div>
    );
};

export default Feedback;