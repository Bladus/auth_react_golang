export const boundApiReducer = ( type, prepare = action => action.data, extendKey = null ) => {
    return apiReducer.bind(null, type, prepare, extendKey);
}

const apiReducer = (type, prepare, extendKey, state, action) => {
    switch (action.type) {
    case type.REQUEST:
        var data = {
            pending: true,
            data: state.data
        }
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.SUCCESS:
        var data = {
            pending: false,
            data: prepare(action)
        }
        return typeof extendKey === 'function' ? Object.assign({}, state, { [extendKey(action)]: data }) : data;
    case type.FAILURE:
        return {
            pending: null,
            data: undefined
        };
    default:
        return state;
    }
}