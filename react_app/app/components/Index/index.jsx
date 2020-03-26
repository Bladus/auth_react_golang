import React, { useContext, Fragment } from 'react';
import { Store } from 'utils/store';

import Search from 'components/Search';
import Report from 'components/Report';

const Index = (props) => {
    let { state, dispatch } = useContext(Store);
    return (
        <Fragment>
            <Search />
            <div className="content_block">
                <div className="content_block_left">
                    <Report />
                </div>
                <div className="content_block_right">
                    <div></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
