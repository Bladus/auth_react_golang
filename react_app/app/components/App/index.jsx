'use strict';

import React, { Fragment, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import { Store } from 'utils/store';
import { getUser } from 'actions';
import Menu from 'components/Menu';

const DefaultLayout = ({component: Component, ...rest}) => {
    let { state, dispatch } = useContext(Store);
    useEffect(() => {
        getUser(dispatch);
    }, []);
    let {user} = state;
    return (
        <Route {...rest} render={matchProps => (
            <Fragment>
                {user.pending == false && user.data.username != null && (
                    <Fragment>
                        <div className="wrapper">
                            <Header />
                            <div className="content">
                                <Menu />
                                <div className="content_body">
                                    <Component {...matchProps} />
                                </div>
                            </div>
                        </div>
                        <div className="footer">Footer</div>
                    </Fragment>
                )}
                {user.pending == false && user.data.username == null && (
                    <Redirect push to="/login" />
                )}
            </Fragment>
        )} />
    )
}

export default DefaultLayout;