import React, { useContext, useEffect, useRef } from 'react';
//import { useHistory } from 'react-router-dom';
import { Store } from 'utils/store';
import { login } from 'actions';
import serialize from 'form-serialize';

const Login = (props) => {
    //let history = useHistory();
    let { state, dispatch } = useContext(Store);
    const form = useRef(null);
    const handlerSubmit = (e) => {
        e.preventDefault();
        let data = serialize(form.current, {hash: true});
        login(dispatch)(data).then(data => {
            if(data.ok) {
                window.location.href = "/";
                //history.push("/");
            }
        });
    }
    return (
        <div className="login">
            <div className="login_wrapper" >
                <div className="login_body">
                    <h3>Роспатент платформа</h3>
                    <div className="login_form">
                        <div className="login_title">Авторизация</div>
                        <form ref={form} onSubmit={handlerSubmit} >
                            <div className="field_input">
                                <label id="id_username" >Имя пользователя</label>
                                <input name="user" type="text" id="id_username" placeholder="Имя пользователя" />
                            </div>
                            <div className="field_input">
                                <label id="id_password" >Пароль</label>
                                <input name="password" type="password" id="id_password" placeholder="пароль" />
                            </div>
                            <input className="login_submit" type="submit" value="Войти" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
