import React, { Component } from 'react'
import { ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native'
import { Text, Container, Body, CardItem, Card } from 'native-base'
import { FlatGrid } from 'react-native-super-grid'
import { Toolbar } from 'react-native-material-ui'
import ResponsiveImage from 'react-native-responsive-image'
import { styles } from '../Styles'

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            refreshing: false,

        }
    }
    pesqResult = () => {
        const pesquisa = this.props.navigation.state.params
        return fetch('http://api.infocomn.com.br/public/api/pesquisar/' + pesquisa.search, {
            method: 'GET',
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                })
            })
            .catch(() => {
                Alert.alert(
                    'DESCULPE',
                    'O parceiro ' + pesquisa.search + ' não esta conosco.',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.goBack(null) },
                    ],
                    { cancelable: false },
                );
            })

    }
    onDetalhes = (item) => {
        this.props.navigation.navigate('Detalhes', item);
    }
    renderItem = ({ item, index }) => {
        return (
            <Card style={styles.itemContainer} key={index}>
                <Body>
                    <ResponsiveImage
                        style={styles.thumbnail}
                        initWidth="175"
                        initHeight="150"
                        source={{ uri: 'https://infocomn.com.br/assets/img/parceiros/' + item.img }} />
                    <Text style={{ marginTop: 5, color: '#525252' }}>{item.nome}</Text>
                </Body>
                <TouchableOpacity onPress={() => this.onDetalhes(item)}>
                    <CardItem footer style={styles.saibamais}>
                        <Text style={styles.textbutton}>SABER MAIS</Text>
                    </CardItem >
                </TouchableOpacity>
            </Card>
        )
    }
    Refresh = () => {
        this.setState({ refreshing: true });
        this.pesqResult().then(() => {
            this.setState({ refreshing: false });
        });
    }
    componentDidMount = () => {
        this.reRender = this.props.navigation.addListener('willFocus', () => {
            this.pesqResult();
        });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <Container style={{ justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#ef8c32" />
                </Container>
            )
        }
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack(null)}
                    style={{ container: styles.navbar }}
                />
                <ScrollView style={{ backgroundColor: '#fff' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.Refresh}
                        />
                    }
                >
                    <FlatGrid
                        itemDimension={135}
                        items={this.state.dataSource}
                        style={styles.flatlist}
                        renderItem={this.renderItem}
                    />
                </ScrollView>
            </Container>
        )
    }
}
