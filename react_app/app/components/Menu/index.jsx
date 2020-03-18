import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';

const Menu = (props) => {
    let { state, dispatch } = useContext(Store);
    return (
        <div className="menu">
            <ul className="menu_list" >
                <li>Живой поиск</li>
                <li className="active" >Патентный поиск</li>
                <li>Сессии</li>
            </ul>
        </div>
    );
}

export default Menu;
