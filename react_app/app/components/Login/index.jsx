import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from 'utils/store';
import { login } from 'actions';
import serialize from 'form-serialize';

const Login = (props) => {
    let { state, dispatch } = useContext(Store);
    let [data, setData] = useState(null);
    let [flag, setFlag] = useState(0);
    const form = useRef(null);
    const handlerSubmit = (e) => {
        e.preventDefault();
        let data = serialize(form.current, {hash: true});
        setData(data);
        setFlag(1)
    }
    useEffect(() => {
        flag && login(dispatch)(data).then(data => {
            if(data.ok == 1) {
                window.location.href = "/";
            }
        });
    }, [data]);
    console.log(state.login.data.error)
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
                            {state.login.data.error && (<div className="login_error">{state.login.data.error}</div>)}
                            <input className="login_submit" type="submit" value="Войти" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
