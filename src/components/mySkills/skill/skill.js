import React from 'react';
import './skill.scss'

const Skill = ({title}) => {
    return (
        <div className={'row'}>
            <span>{title}</span>
            <div className={'line-skill'}>
                <div className={'line-success'}></div>
                <div className={'Full-Line-success'}></div>
            </div>
        </div>
    );
};

export default Skill;