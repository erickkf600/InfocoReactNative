import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { styles } from '../Styles'
import { NavigationEvents } from 'react-navigation'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesq: '',
        }
    }
    logo = () => {
        return (
            <View>
                <Image
                    source={require('../Img/logo.png')}
                    style={styles.logo}
                    resizeMode="contain" />
            </View>
        )
    }
    pesqInput = (text) => {
        this.setState({ pesq: text })
    }
    goToSearch = () => {
        const inputPesq = this.state.pesq
        this.props.navigation.navigate('SearchPage', { search: inputPesq })
    }

    render() {
        return (
            <View>
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.openDrawer()}
                    centerElement={this.logo()}
                    style={{ container: styles.navbar }}
                    searchable={{
                        autoFocus: true,
                        autoCorrect: false,
                        autoCapitalize: 'none',
                        placeholder: 'Pesquisar...',
                        onChangeText: (text) => this.pesqInput(text),
                        onSubmitEditing: () => this.goToSearch(),
                    }}
                />
            </View>
        );
    }
}

