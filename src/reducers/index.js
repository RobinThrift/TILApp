// @flow

import {combineReducers} from 'redux'
import {settingsReducer} from './settings'
import {navReducer} from './navigation'

export const rootReducer = combineReducers({
    settings: settingsReducer,
    navigation: navReducer
})

