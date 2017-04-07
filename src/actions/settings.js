// @flow
import type {FSA} from '../flow'
import type {Settings} from '../reducers/settings'

export const SET_SETTINGS = 'til/actions/SET_SETTINGS'

export const setSettings = (settings: Settings): FSA => ({
    type: SET_SETTINGS,
    payload: settings
})

