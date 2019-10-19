import React, { Component } from 'react'
import { Text, Body, CardItem, Card } from 'native-base'
import { ActivityIndicator, TouchableOpacity, ScrollView, View, Animated } from 'react-native'
import { styles } from '../Styles'
import { FlatGrid } from 'react-native-super-grid'
import ResponsiveImage from 'react-native-responsive-image'

export default class Destaques extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            page: 1,
            count: 4,
        }
    }
    fetchData = () => {
        const { page, count } = this.state
        return fetch(`http://api.infocomn.com.br/public/api/dados/${page}/${count}`, {
            method: 'GET',
            cache: "no-cache",
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: [...this.state.dataSource, ...responseJson],
                    page: page + 1,
                })
            })
            .catch((error) => {
                alert(error)
            })
    }
    componentDidMount = () => {
        this.fetchData();
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
    renderFooter = () => {
        if (this.state.isLoading) return (
            <View>
                <ActivityIndicator size="large" color="#ef8c32" />
            </View>
        );
        return (
            <View style={{ width: 15, height: 15, backgroundColor: '#ef8c32', alignSelf: 'center', borderRadius: 100 }}></View>
        );
    };
    render() {
        this.renderFooter();
        return (
            <ScrollView>
                <FlatGrid
                    itemDimension={135}
                    items={this.state.dataSource}
                    style={styles.flatlist}
                    renderItem={this.renderItem}
                    onEndReached={this.fetchData}
                    onEndReachedThreshold={0.01}
                    ListFooterComponent={this.renderFooter}
                />
            </ScrollView>
        )
    }
}

