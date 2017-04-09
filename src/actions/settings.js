// @flow
import * as Keychain from 'react-native-keychain'
import type {FSA} from '../flow'
import type {Settings} from '../reducers/settings'

export const SET_SETTINGS_START = 'til/actions/SET_SETTINGS_START'
export const SET_SETTINGS_END = 'til/actions/SET_SETTINGS_END'
export const SET_SETTINGS_ERROR = 'til/actions/SET_SETTINGS_ERROR'

export const setSettings = (settings: Settings) => (dispatch: (action: FSA) => void) => {
    dispatch({type: SET_SETTINGS_START})

    if (settings.secret) {
        Keychain
            .setGenericPassword('', settings.secret, 'til-app')
            .then(() => {
                dispatch({
                    type: SET_SETTINGS_END,
                    payload: {
                        baseURL: settings.baseURL,
                        ua: settings.ua
                    }
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: SET_SETTINGS_ERROR,
                    error: true,
                    payload: err
                })
            })
    } else {
        dispatch({
            type: SET_SETTINGS_END,
            payload: {
                baseURL: settings.baseURL,
                ua: settings.ua
            }
        })
    }
}

