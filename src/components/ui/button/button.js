import React from 'react';
import './button.scss'

const Button = ({title, mt}) => {
    return (
        <div style={{marginTop: `${mt}`}} className={'btn'}>
            {title}
        </div>
    );
};

export default Button;