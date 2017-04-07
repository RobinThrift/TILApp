// @flow
import type {Reducer} from 'redux' // eslint-disable-line import/named
import type {FSA} from '../flow'

type ActionMapping<T> = {
    [key: string]: (state: T, action: FSA) => T
}

export function createReducer<T>(initialState: T, handlers: ActionMapping<T>): Reducer<T, FSA> {
    return (state = initialState, action) => {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action)
        }
        return state
    }
}

