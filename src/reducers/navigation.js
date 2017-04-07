// @flow
import {AppNavigator} from '../containers/navigator'


export function navReducer(state: ?Object, action: Object) {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    return nextState ? nextState : state
}

