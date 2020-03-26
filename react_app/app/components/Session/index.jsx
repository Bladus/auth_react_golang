import React, { useContext, Fragment } from 'react';
import { Store } from 'utils/store';

const Session = () => {
    let { state, dispatch } = useContext(Store);
    return (
        <Fragment>
            Session
        </Fragment>
    );
}

export default Session;