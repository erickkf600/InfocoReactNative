import React, { Component } from 'react'
import { Container, Card, CardItem, Text, Body, H1, Content   } from 'native-base'
import { Toolbar, Button } from 'react-native-material-ui'
import { styles, sobre, planos } from '../Styles'
import { ScrollView, View } from 'react-native'

export default class Planos extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Title"
                    style={{ container: styles.navbar }}
                />
                <ScrollView>
                    <View style={sobre.texts}>
                        <H1 style={sobre.h1}>Confira os Planos</H1>
                        <Text>E descubra qual combina mais com você.</Text>
                    </View>
                    <Content padder>
                        <Card>
                            <CardItem header style={[planos.header, { backgroundColor: '#486D8B'}]}>
                                <Text style={{color: '#fff', fontSize: 25}}>Básico</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={planos.benef}>Banner do Projeto</Text>
                                    <Text style={planos.benef}>Propaganda em nosso site</Text>
                                    <Text style={planos.benef}>Urna para deposito dos cadastros</Text>
                                    <Text style={planos.benef}>Fidelity Card PREMIUM com sua logo</Text>
                                    <Text style={planos.benef}>Formularios para cadastro de clientes</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header style={[planos.header, { backgroundColor: '#829E4B' }]}>
                                <Text style={{ color: '#fff', fontSize: 25 }}>Médio</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={planos.benef}>Banner do Projeto</Text>
                                    <Text style={planos.benef}>Fidelity Card GOLD</Text>
                                    <Text style={planos.benef}>Propaganda em nosso site</Text>
                                    <Text style={planos.benef}>Urna para deposito dos cadastros</Text>
                                    <Text style={planos.benef}>Fidelity Card PREMIUM com sua logo</Text>
                                    <Text style={planos.benef}>Formularios para cadastro de clientes</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header style={[planos.header, { backgroundColor: '#F4C842' }]}>
                                <Text style={{ color: '#fff', fontSize: 25 }}>Avançado</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={planos.benef}>Banner do Projeto</Text>
                                    <Text style={planos.benef}>Fidelity Card GOLD</Text>
                                    <Text style={planos.benef}>Propaganda em nosso site</Text>
                                    <Text style={planos.benef}>Instagram e Facebook próprio</Text>
                                    <Text style={planos.benef}>Urna para deposito dos cadastros</Text>
                                    <Text style={planos.benef}>Fidelity Card PREMIUM com sua logo</Text>
                                    <Text style={planos.benef}>Formularios para cadastro de clientes</Text>
                                    <Text style={planos.benef}>3 Postagens mensais Facebook e Instagram</Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header style={[planos.header, { backgroundColor: '#9E4B4B' }]}>
                                <Text style={{ color: '#fff', fontSize: 25 }}>Super</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text style={planos.benef}>Todos os Benefícios Acima</Text>
                                    <Text style={planos.benef}>E Mais...</Text>
                                    <Text style={planos.benef}>4 Postagens mensais Facebook e Instagram</Text>
                                    <Text style={planos.benef}>Administração do seu site</Text>
                                    <Text style={planos.benef}>1000 Cartões de Visita</Text>
                                    <Text style={planos.benef}>Destaque no site da InFoco</Text>
                                    <Text style={planos.benef}>Propaganda na revista</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                    <Button raised
                        text="FAÇA A SUA ADESÃO"
                        style={{ container: planos.adbutton, text: styles.adbuttontxt }}
                        onPress={() => this.props.navigation.navigate('AdesaoPage')} />
                </ScrollView>
            </Container>
        )
    }
}
