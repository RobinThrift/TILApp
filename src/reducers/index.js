// @flow

import {combineReducers} from 'redux'
import {settingsReducer} from './settings'
import type {Settings} from './settings'
import {postsReducer} from './posts'
import type {PostsState} from './posts'
import {navReducer} from './navigation'

export type AppState = {
    settings: Settings,
    posts: PostsState,
    navigation: Object
}

export const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
    navigation: navReducer
})

