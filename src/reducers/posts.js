// @flow
import {createReducer} from '../helper/create-reducer'
import {
    CLEAR_POST_STATE,
    UPDATE_DRAFT,
    ADD_POST_START,
    ADD_POST_END,
    ADD_POST_ERROR
} from '../actions/posts'

export type PostsState = {
    draft: string,
    isSending: boolean,
    error: ?Error
}

const initState: PostsState = {
    draft: '',
    isSending: false,
    error: null
}

export const postsReducer = createReducer(initState, {
    [CLEAR_POST_STATE]: state => {
        return {
            ...state,
            error: null,
            isSending: false
        }
    },
    [UPDATE_DRAFT]: (state, {payload}) => {
        return {
            ...state,
            draft: payload
        }
    },
    [ADD_POST_START]: state => {
        return {
            ...state,
            isSending: true,
            error: null
        }
    },
    [ADD_POST_END]: state => {
        return {
            ...state,
            draft: '',
            isSending: false
        }
    },
    [ADD_POST_ERROR]: (state, {payload}) => {
        return {
            ...state,
            isSending: false,
            error: payload
        }
    }
})
