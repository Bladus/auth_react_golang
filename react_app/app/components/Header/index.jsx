import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';

const Header = (props) => {
    let { state, dispatch } = useContext(Store);
    let {user} = state;
    return (
        <div className="header">
            <div className="header_title" >Роспатент платформа</div>
            {!user.pending && user.data && (
                <div className="header_user" >
                    <div className="header_img" >
                        <img src={require('../../images/user.jpg')} alt="user" />
                    </div>
                    <span>{user.data.username}</span>
                </div>
            )}
        </div>
    );
}

export default Header;
