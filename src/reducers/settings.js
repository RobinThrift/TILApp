// @flow
import {createReducer} from '../helper/create-reducer'
import {SET_SETTINGS} from '../actions/settings'

export type Settings = {
    baseURL: string,
    secret: string,
    ua: string
}

const initState: Settings = {
    baseURL: '',
    secret: '',
    ua: 'TILApp'
}

export const settingsReducer = createReducer(initState, {
    [SET_SETTINGS]: (state, {payload}) => {
        return {
            ...state,
            ...payload
        }
    }
})

