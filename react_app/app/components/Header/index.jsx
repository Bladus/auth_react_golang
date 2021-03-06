import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';
import { logout } from 'actions';

const Header = (props) => {
    let { state, dispatch } = useContext(Store);
    let {user} = state;
    const handlerLogout = () => {
        logout(dispatch).then(data => {
            window.location.href = '/login';
        });
    }
    return (
        <div className="header">
            <div className="header_title" >Роспатент платформа</div>
            {!user.pending && user.data && (
                <div className="header_user" >
                    <div className="header_img" >
                        <img src={require('../../images/user.jpg')} alt="user" />
                    </div>
                    <span>{user.data.username}</span>
                    <div className="header_exit" onClick={handlerLogout} >Выход</div>
                </div>
            )}
        </div>
    );
}

export default Header;
