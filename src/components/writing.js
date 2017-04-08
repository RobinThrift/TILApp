// @flow
import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import {
    Button,
    Icon,
    Input
} from 'native-base'

let styles = {
    base: {
        flex: 1
    },
    input: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 22
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        top: 20
    },
    spinner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export type WritingProps = {
    addPost: (content: string) => void,
    draft: string,
    navigation: {
        navigate: (target: string) => void
    },
    isSending: boolean,
    updateDraft: (content: string) => void
}

export function Writing(props: WritingProps) {
    let {navigation, updateDraft, addPost} = props

    return (
        <View style={styles.base}>
            {props.isSending &&
                <View style={styles.spinner}>
                    <ActivityIndicator />
                </View>
            }
            <View
                style={styles.header}
                pointerEvents={(props.isSending ? 'none' : 'auto')}
            >
                <Button
                    transparent
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Icon name="settings" />
                </Button>
                <Button
                    transparent
                    onPress={() => addPost(props.draft)}
                >
                    <Icon name="send" />
                </Button>
            </View>
            <Input
                multiline
                autoFocus
                style={styles.input}
                placeholder="Today I learned..."
                value={props.draft}
                onChangeText={(s: string) => updateDraft(s)}
            />
        </View>
    )
}
