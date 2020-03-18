export const boundApiReducer = ( type, model, extendKey = null, prepare = action => action.data ) => {
    return apiReducer.bind(null, type, model, extendKey, prepare);
}

const apiReducer = (type, model, extendKey, prepare, state, action) => {
    switch (action.type) {
    case type.REQUEST:
        var data = {
            pending: true,
            data: model
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