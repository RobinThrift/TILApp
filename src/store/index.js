// @flow
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {AsyncStorage} from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

import {rootReducer} from '../reducers'

let middleware = [thunk]

if (__DEV__) {
    const isDebuggingInChrome = __DEV__ && Boolean(window.navigator.userAgent)
    let logger = createLogger({
        predicate: () => isDebuggingInChrome,
        collapsed: true,
        duration: true
    })
    middleware.push(logger)
}

export function configureStore(onComplete: ?() => void) {
    let store = createStore(rootReducer, compose(applyMiddleware(...middleware), autoRehydrate()))
    persistStore(store, {
        storage: AsyncStorage,
        transforms: [immutableTransform()],
        blacklist: [
            'navigation'
        ]
    }, onComplete)

    return store
}
