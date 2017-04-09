// @flow
import * as Keychain from 'react-native-keychain'
import axios from 'axios'
import type {FSA} from '../flow'
import type {AppState} from '../reducers/index'

export const CLEAR_POST_STATE = 'til/actions/CLEAR_POST_STATE'
export const UPDATE_DRAFT = 'til/actions/UPDATE_DRAFT'
export const ADD_POST_START = 'til/actions/ADD_POST_START'
export const ADD_POST_END = 'til/actions/ADD_POST_END'
export const ADD_POST_ERROR = 'til/actions/ADD_POST_ERROR'

export const clearPostState = () => ({
    type: CLEAR_POST_STATE
})

export const updateDraft = (newContent: string) => ({
    type: UPDATE_DRAFT,
    payload: newContent
})

export const addPost = (post: string) => {
    return async (dispatch: (action: FSA) => void, getState: () => AppState) => {
        let state = getState()

        dispatch({
            type: ADD_POST_START
        })

        let creds = await Keychain
            .getGenericPassword('til-app')

        if (!creds) {
            dispatch({
                type: ADD_POST_ERROR,
                error: true,
                payload: 'Missing credentials!'
            })
            return
        }

            console.log('creds', creds);

        axios({
            url: `${state.settings.baseURL}/add?secret=${creds.password}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                /* eslint-disable camelcase */
                posted_date: Math.floor(new Date().getTime() / 1000),
                posted_from: state.settings.ua,
                content: post
                /* eslint-enable camelcase */
            }
        })
            .then(() => {
                dispatch({
                    type: ADD_POST_END
                })
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response.data)
                } else {
                    console.log(err)
                }
                dispatch({
                    type: ADD_POST_ERROR,
                    error: true,
                    payload: err
                })
            })
    }
}

