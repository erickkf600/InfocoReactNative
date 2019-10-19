import React, { Component } from 'react'
import { ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, H1, Text, Icon } from 'native-base'
import { Toolbar } from 'react-native-material-ui'
import { styles, sobre } from '../Styles'

export default class Sobre extends Component {
    render() {
        return (
            <Container>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="SOBRE NÓS"
                    style={{ container: styles.navbar }}
                />
                <ScrollView style={sobre.view}>
                    <View style={sobre.texts}>
                        <H1 style={sobre.h1}>QUEM SOMOS</H1>
                        <Text>"Se você não é o maior, então seja o melhor."</Text>
                    </View>
                    <View>
                        <Image resizeMode='contain' source={require('../Img/splash.png')} style={sobre.logo} />
                    </View>
                    <View style={sobre.textos}>
                        <Text style={sobre.text}>
                            Você já imaginou a sua empresa sendo lembrada pela exclusividade da sua marca?
                        </Text>
                        <Text style={sobre.text}>
                            A Infoco é uma empresa do segmento de publicidade, que chega ao mercado para oferecer o melhor em divulgação e veiculação da sua empresa promovendo um marketing digital eficaz, que gere resultados positivos e satisfatórios ao seu negócio. Mas, não é só isso...
                        </Text>
                        <Text style={sobre.text}>
                            A Infoco conta com uma plataforma de networking, que tem como parceiros empresas de vários segmentos que, de forma mútua, disponibiliza seus serviços e produtos (com descontos especiais) fortalecendo uma rede de parcerias, gerando um negócio rentável a todos!
                        </Text>
                        <Text style={sobre.text}>
                            E você que está aqui navegando nesse site, conhecendo o nosso trabalho, a boa notícia que te damos, é que VOCÊ também vai poder APROVEITAR de tudo o que Infoco e as empresas participantes desse projeto de parceria estão promovendo.
                        </Text>
                        <Text style={sobre.text}>
                            para adquirir o nosso cartão fidelidade Premium, procure um desses estebelecimentos que você está vendo aqui no nosso site e faça sua adesão.
                        </Text>
                    </View>
                    <Text style={{ textAlign: 'center', paddingVertical: 20, fontSize: 24 }}>
                        App Projetado e desenvolvido por Erick Ferreira
                    </Text>
                    <TouchableOpacity style={sobre.botao} onPress={() => Linking.openURL('https://github.com/erickkf600')}>
                        <Icon type="Ionicons" name="logo-github" style={{ fontSize: 30, color: 'white', marginRight: 10 }} />
                        <Text style={{ color: '#fff', fontSize: 25 }}>GITHUB</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Container>
        )
    }
}
