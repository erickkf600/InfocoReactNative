import React, { Component } from 'react'
import { Text, Container, Header, Content, List, ListItem, Left, Right, Icon } from 'native-base'
import { Image, Linking, TouchableHighlight } from 'react-native'
import { Footer, Sidebar, styles, Li } from '../Styles'

export default class CustomDrawer extends Component {
    navLink(nav, text) {
        return (
            <ListItem noBorder onPress={() => this.props.navigation.navigate(nav)} style={styles.item}>
                <Left>
                    <Li>{text}</Li>
                </Left>
                <Right>
                    <Icon name="arrow-forward" style={{ color: '#ef8c32' }} />
                </Right>
            </ListItem>
        )
    }
    render() {
        return (
            <Container>
                <Sidebar>
                    <Header style={styles.sidebar} androidStatusBarColor="#d86904">
                        <Container style={styles.sideback}>
                            <Image
                                resizeMode="contain"
                                source={require('../Img/splash.png')}
                                style={styles.sidelogo} />
                        </Container>
                    </Header>
                    <Content style={styles.sidelinks}>
                        <List>
                            {this.navLink('Home', 'Home')}
                            {this.navLink('Contato', 'Contato')}
                            {this.navLink('Planos', 'Planos')}
                            {this.navLink('Sobre', 'Sobre')}
                            {this.navLink('Faq', 'FAQ')}
                        </List>
                    </Content>
                </Sidebar>
                <TouchableHighlight onPress={() => Linking.openURL('https://github.com/erickkf600')}>
                    <Footer>
                        <Left>
                            <Text style={styles.creditos}>Desenvolvido por Erick Ferreira</Text>
                        </Left>
                        <Right>
                            <Text style={styles.versao}>v1.0</Text>
                        </Right>
                    </Footer>
                </TouchableHighlight>
            </Container>
        )
    }
}

