// @flow
import React from 'react'
import {View, StyleSheet} from 'react-native'
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
    settingsButton: {
    },
    postButton: {

    }
}

export type WritingProps = {
    navigation: {
        navigate: (target: string) => void
    },
    postContent: (content: string) => void
}

type WritingState = {
    post: string
}

export class Writing extends React.Component<void, WritingProps, WritingState> {
    state: WritingState

    constructor(props: WritingProps) {
        super(props)
        this.state = {
            post: ''
        }
    }

    onTextChange(newText: string) {
        this.setState({
            ...this.state,
            post: newText
        })
    }

    render() {
        let { navigation, postContent } = this.props

        return (
            <View style={styles.base}>
                <View style={styles.header}>
                    <Button
                        style={styles.settingsButton}
                        transparent
                        onPress={() => navigation.navigate('Settings')}
                    >
                        <Icon name="settings" />
                    </Button>
                    <Button
                        style={styles.postButton}
                        transparent
                        onPress={() => postContent(this.state.post)}
                    >
                        <Icon name="send" />
                    </Button>
                </View>
                <Input
                    style={styles.input}
                    multiline
                    autoFocus
                    placeholder="Today I learned..."
                    onChangeText={this.onTextChange.bind(this)}
                    value={this.state.post}
                />
            </View>
        )
    }
}

