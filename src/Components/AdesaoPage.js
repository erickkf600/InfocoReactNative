import React, { Component } from 'react'
import { Container } from 'native-base'
import { WebView } from 'react-native-webview'

export default class AdesaoPage extends Component {
    render() {
        return (
            <Container>
                <WebView
                    source={{ uri: 'https://infocomn.com.br/adesao'}}
                    style={{ marginTop: 20 }}
                />
            </Container>
        )
    }
}


