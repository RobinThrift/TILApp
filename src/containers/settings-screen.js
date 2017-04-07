// @flow
import React from 'react'
import {connect} from 'react-redux'
import {SettingsScreen} from '../components/settings-screen'
import {setSettings} from '../actions/settings'

let mapStateToProps = (state) => ({
    ...state.settings
})

let mapActionsToProps = {
    setSettings
}

export const SettingsScreenContainer = connect(mapStateToProps, mapActionsToProps)(SettingsScreen)

