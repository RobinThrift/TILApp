// @flow
import React from 'react'
import {Provider} from 'react-redux'
import {TILApp} from '../components/til-app'
import {configureStore} from '../store'

type TILAppContainerState = {
    isLoading: boolean,
    store: any
}

export class TILAppContainer extends React.Component<void, void, TILAppContainerState> {
    state: TILAppContainerState

    constructor() {
        super()
        this.state = {
            isLoading: true,
            store: configureStore(() => this.setState({isLoading: false}))
        }
    }

    render() {
        if (this.state.isLoading) {
            return null
        }
        return (
            <Provider store={this.state.store}>
                <TILApp />
            </Provider>
        )
    }
}
