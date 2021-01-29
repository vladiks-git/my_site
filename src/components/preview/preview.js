import React from 'react';
import './preview.scss'
import NavBar from "./navBar/navBar";
import Content from "./content/content";

const Preview = () => {
    return (
        <div className={'preview'}>
            <NavBar/>
            <Content/>
        </div>
    );
};

export default Preview;