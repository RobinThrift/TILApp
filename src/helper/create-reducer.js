// @flow

export function createReducer<T>(initialState: T, handlers: Object) {
    return (state: T = initialState, action: Object): T => {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action)
        }
        return state
    }
}
