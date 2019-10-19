import React, { Component } from 'react'
import { Text, Container, Card, H1, Body, CardItem } from 'native-base'
import { Toolbar } from 'react-native-material-ui'
import { Image, TouchableOpacity, View, Linking, ScrollView } from 'react-native'
import { styles, Span, Div } from '../Styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Detalhes extends Component {
    render() {
        const params = this.props.navigation.state.params
        openLink = () => {
            if (params.url) {
                Linking.openURL(params.url)
            } else {
                alert("Link para rede social de " + params.nome + " esta indefinido")
            }
        }
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement={params.nome}
                    style={{ container: styles.navbar }}
                />
                <View style={{ alignItems: 'center'}}>
                    <Image
                        style={styles.dtlimg}
                        resizeMode="contain"
                        source={{ uri: 'https://infocomn.com.br/assets/img/parceiros/' + params.img }} />
                </View>
                <Card style={styles.dtlcard}>
                    <CardItem header>
                        <H1>{params.nome}</H1>
                    </CardItem>
                    <Text style={{ color: '#a3a3a3', fontSize: 10, textAlign: 'left' }}>Tags: {params.tags}</Text>
                    <CardItem>
                        <Body style={{marginVertical: 5}}>
                            <Text><Span>Endereço:</Span>  {params.endereco} - {params.num}</Text>
                            <Text><Span>CEP:</Span>  {params.cep}</Text>
                            <Div>
                                <Icon name="phone" style={{fontSize: 23, color: '#f00', marginRight: 10}} />
                                <Text>{params.tel}</Text>
                            </Div>
                            <Div>
                                <Icon name="whatsapp" style={{ fontSize: 23, color: '#41CE5B', marginRight: 10 }} />
                                <Text>{params.whats}</Text>
                            </Div>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <TouchableOpacity style={styles.visitarbtn} onPress={() => openLink()}>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>VISITAR</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}
