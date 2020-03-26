import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    let { state, dispatch } = useContext(Store);
    return (
        <div className="menu">
            <ul className="menu_list" >
                <li>
                    <NavLink to="/" exact >Патентный поиск</NavLink>
                </li>
                <li>
                    <NavLink to="/session" exact >Сессии</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
