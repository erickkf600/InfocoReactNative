import React, { Component } from 'react'
import { Container } from 'native-base'
import { WebView } from 'react-native-webview'

export default class Planos extends Component {
    render() {
        return (
            <Container>
                <WebView
                    source={{ uri: 'https://infocomn.com.br/faq' }}
                    style={{ marginTop: 20 }}
                />
            </Container>
        )
    }
}
