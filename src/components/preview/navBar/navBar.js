import React from 'react';
import './navBar.scss'
import burger from '../../../img/burger.jpg'

const links = ['Главная','Об авторе', 'Работы', 'Процесс', 'Контакты']

const NavBar = () => {

    const renderLinks = () => {
        return links.map((item, index) => {
            return(
                <li className={'link'} key={index}>
                    {item}
                </li>
            )
        })
    }

    return (
        <div>
            <div className={'content'}>
                <span className={'logo'}>ER</span>
                <div className={'div_menu'}>
                    <ul className={'menu'}>
                        {renderLinks()}
                    </ul>
                </div>
                <div className={'burger'}>
                    <img className={'burgerImg'} src={burger}/>
                </div>
            </div>

        </div>
    );
};

export default NavBar;