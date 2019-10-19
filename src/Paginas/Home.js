import React, { Component } from 'react'
import { Keyboard, ScrollView } from 'react-native'
import { Container, Text } from 'native-base'
import Navbar from '../Header/Navbar'
import Carousel from '../Components/Carousel'
import Categorias from '../Components/Categorias'
import Adesao from '../Components/Adesao'
import Destaques from '../Components/Destaques'
export default class Home extends Component {
    state = {
        searchBarFocus: false
    }
    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        this.setState({ searchBarFocus: true })
    }
    _keyboardWillShow = () => {
        this.setState({ searchBarFocus: true })
    }
    _keyboardWillHide = () => {
        this.setState({ searchBarFocus: false })
    }
    _keyboardDidHide = () => {
        this.setState({ searchBarFocus: false })
    }
    render() {
        return (
            <Container>
                <Navbar navigation={this.props.navigation} />
                <ScrollView style={{flex: 1}} keyboardShouldPersistTaps={'handled'}>
                    <Carousel />
                    <Text style={{ fontSize: 15, marginTop: 20, marginLeft: 10, color: '#858585'}}>Categorias</Text>
                    <Categorias navigation={this.props.navigation}/>
                    <Adesao navigation={this.props.navigation}/>
                    <Text style={{ fontSize: 15, marginTop: 15, marginLeft: 10, color: '#858585'}}>Destques</Text>
                    <Destaques navigation={this.props.navigation}/>
                </ScrollView>
            </Container>

        );
    }
}

