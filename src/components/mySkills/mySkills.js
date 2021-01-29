import React from 'react';
import './mySkills.scss'
import Skill from "./skill/skill";
import avatar from '../../img/avatar.jpg'

const MySkills = () => {
    return (
        <div className={'my-skills'}>
            <div className={'skils-lines'}>
                <h2>Мои навыки</h2>
                <Skill title={'Js'}/>
                <Skill title={'Js'}/>
                <Skill title={'Js'}/>
            </div>
            <div>
                <img className={'avatar'} src={avatar}/>
            </div>
        </div>
    );
};

export default MySkills;