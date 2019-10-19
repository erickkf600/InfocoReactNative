import React, { Component } from 'react'
import { Text, Container, Body, CardItem, Card } from 'native-base'
import { ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { styles } from '../Styles'
import { FlatGrid } from 'react-native-super-grid'
import { Toolbar } from 'react-native-material-ui'
import ResponsiveImage from 'react-native-responsive-image'

export default class CategoriaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            refreshing: false,

        }
    }
    fetchData = () => {
        const categ = this.props.navigation.state.params
        return fetch('http://api.infocomn.com.br/public/api/categoria/' + categ.param, {
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
            .catch((error) => {
                alert(error)
            })

    }
    componentDidMount = () => {
        this.reRender = this.props.navigation.addListener('willFocus', () => {
            this.fetchData();
        });
    }
    onDetalhes = (item) => {
        this.props.navigation.navigate('Detalhes', item);
    };
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
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
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
            <ScrollView style={{ backgroundColor: '#fff' }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.Refresh}
                    />
                }
            >
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement={this.props.navigation.state.params.nome}
                    style={{ container: styles.navbar }}
                />
                <FlatGrid
                    itemDimension={135}
                    items={this.state.dataSource}
                    style={styles.flatlist}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        )
    }
}
