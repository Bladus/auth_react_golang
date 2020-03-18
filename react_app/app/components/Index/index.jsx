import React, { useContext, useEffect } from 'react';
import { Store } from 'utils/store';
import Menu from 'components/Menu';

const Index = (props) => {
    let { state, dispatch } = useContext(Store);
    return (
        <div className="content">
            <Menu />
            <div className="content_body">
                jsdnfjnsdjfnjsdnfjsdnfjnsdjfnsjd sdjfnjsdfjsd sdjfnjsdnf sdjfn jsdf jsdfjnsdjfn jdsnjfnsdjfnjsdfjsdn fsdjfnjsdnfjdsnfjnsdf
                jsdnfjnsdjfnjsdnfjsdnfjnsdjfnsjd sdjfnjsdfjsd sdjfnjsdnf sdjfn jsdf jsdfjnsdjfn jdsnjfnsdjfnjsdfjsdn fsdjfnjsdnfjdsnfjnsdf
            </div>
        </div>
    );
}

export default Index;
