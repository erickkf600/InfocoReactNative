import React, { Component } from 'react'
import { Text, Container } from 'native-base'
import { Image } from 'react-native'
import { styles } from '../Styles'
import { Button } from 'react-native-material-ui'

export default class Adesao extends Component {
    render() {
        return (
            <Container style={styles.adcont}>
                <Image source={require('../Img/splash.png')} style={styles.adimg}/>
                <Button raised 
                    text="FAÇA A SUA ADESÃO" 
                    style={{ container: styles.adbutton, text: styles.adbuttontxt}}
                    onPress={() => this.props.navigation.navigate('AdesaoPage')}/>
            </Container>
        )
    }
}


