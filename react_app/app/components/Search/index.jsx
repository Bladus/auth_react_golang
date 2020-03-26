import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from 'utils/store';
const Search = () => {
    const search_form = useRef(null);
    let [q, setQ] = useState();
    let [sgsShow, setSgsShow] = useState(false);
    const handler_btn_syntax = () => {}
    const handlerSubmitSearch = () => {}
    const handlerChange = () => {}
    return (
        <form className="search" onSubmit={handlerSubmitSearch} ref={search_form} >
            <div className="search_wrapper">
                <div className="search_input">
                    <input className="search_query" type="text" name="q" placeholder="Поиск..." spellCheck={false} value={q} autoComplete="off" onChange={handlerChange} onClick={() => setSgsShow(true)}/>
                </div>
                <button type="submit" className="search_submit"></button>
            </div>
            <button className="search_attr" onClick={handler_btn_syntax} >Синтаксический анализатор запроса</button>
            {/*<Suggest
                show={sgsShow && q}
                data={state.suggest.data}
                change={(value) => {
                    setQ(value);
                    setSgsShow(false);
                    setParams(dispatch)({...state.params, ...{q: value}});
                    getSearch(dispatch)({q: value});
                }}
                active={[activeLi, setActiveLi]}
            />
            <EventListener
                target={window}
                onClick={handlerClickOut}
            />
            {!!found && !!docs && (
                <div className="search-form_match">
                    <div className="search-form_text">Найдено <span className="search-form_text_found">{found}</span> из <span className="search-form_text_docs">{docs}</span></div>
                </div>
            )}*/}
        </form>
    )
}

export default Search;