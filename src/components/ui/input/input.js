import React from 'react';
import './input.scss'

const Input = ({placeholder, name, width, height}) => {
    return (
        <input style={{width: `${width}`, height: `${height}`}} name={name} className={'input'} placeholder={placeholder}/>
    );
};

export default Input;