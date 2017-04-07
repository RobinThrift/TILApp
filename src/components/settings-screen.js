// @flow
import React from 'react'
import {
    Container,
    Header,
    Left,
    Right,
    Title,
    Body,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Icon,
    Text,
    Footer,
    FooterTab
} from 'native-base'
import type {Settings} from '../reducers/settings'

type SettingsProps = {
    baseURL: string,
    secret: string,
    ua: string,
    setSettings: (s: Settings) => void,
    navigation: {
        goBack: () => void
    }
}

type SettingsState = {
    baseURL: string,
    secret: string,
    ua: string
}

export class SettingsScreen extends React.Component<void, SettingsProps, SettingsState> {
    state: SettingsState

    constructor(props: SettingsProps) {
        super(props)
        this.state = {
            baseURL: props.baseURL,
            secret: props.secret,
            ua: props.ua
        }
    }

    updateInternalSetting(key: string, newText: string) {
        this.setState({
            ...this.state,
            [key]: newText
        })
    }

    updateSettings() {
        this.props.setSettings(this.state)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="ios-close" />
                        </Button>
                    </Left>
                    <Body><Title>Settings</Title></Body>
                    <Right />
                </Header>
                <Content padder>
                    <Form>
                        <Item stackedLabel>
                            <Label>Base URL</Label>
                            <Input
                                value={this.state.baseURL}
                                onChangeText={this.updateInternalSetting.bind(this, 'baseURL')}
                                autoCorrect={false}
                                autoCapitalize="none"
                                keyboardType="url"
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Secret</Label>
                            <Input
                                value={this.state.secret}
                                onChangeText={this.updateInternalSetting.bind(this, 'secret')}
                                autoCorrect={false}
                                autoCapitalize="none"
                                secureTextEntry
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>User Agent</Label>
                            <Input
                                value={this.state.ua}
                                onChangeText={this.updateInternalSetting.bind(this, 'ua')}
                                autoCorrect={false}
                                autoCapitalize="none"
                            />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.updateSettings.bind(this)}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

