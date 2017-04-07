// @flow
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Navigator} from '../containers/navigator'

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export function TILApp() {
    return (
        <View style={styles.container}>
            <Navigator />
        </View>
    )
}


