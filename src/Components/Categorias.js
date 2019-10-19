import React, { Component } from 'react'
import { Image, TouchableOpacity, ScrollView, View, RefreshControl } from 'react-native'
import { Text } from 'native-base'
import { styles } from '../Styles'


export default class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            refreshing: false,
        }
    }
    componentDidMount = () => {
        return fetch('http://api.infocomn.com.br/categorias.json', {
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
                    dataSource: responseJson,
                })
            })
            .catch((error) => {
                alert(error)
            })
    }
    goTo = (item) => {
        this.props.navigation.navigate('CategoriaPage', item)
    }
    render() {
        return (
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.Refresh}
                    />
                }>

                {this.state.dataSource.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity style={styles.categitem} onPress={() => this.goTo(item)}>
                                <Image source={{ uri: 'http://api.infocomn.com.br/src/icons/' + item.img }} style={styles.categicon} /> 
                                <Text style={styles.textitem}>{item.nome}</Text>
                            </TouchableOpacity>
                        </View>)
                })}
            </ScrollView>

        )
    }
}
