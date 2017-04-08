// @flow
import React from 'react'
import {connect} from 'react-redux'
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import {Writing} from '../containers/writing'
import {SettingsScreenContainer} from '../containers/settings-screen'

export const AppNavigator = StackNavigator( // eslint-disable-line new-cap
    {
        Writing: {screen: Writing},
        Settings: {screen: SettingsScreenContainer}
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

export type NavigatorProps = {
    dispatch: (action: Object) => void,
    navigation: Object
}

function NavigatorComp(props: NavigatorProps) {
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
                dispatch: props.dispatch,
                state: props.navigation
            })}
        />
    )
}

export const Navigator = connect(state => ({navigation: state.navigation}))(NavigatorComp)
