import React, { Component } from 'react'
import { Image, View, Linking, TouchableWithoutFeedback } from 'react-native'
import { Container } from 'native-base'
import { styles } from '../Styles'
import Swiper from 'react-native-web-swiper'

//autoplayTimeout={6}

export default class Carousel extends Component {
    render() {
        return (
            <Container style={styles.carousel}>
                <Swiper loop={true} prevButtonText={null} nextButtonText={null}>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('http://medisim.com.br/')}>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/med.jpg' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.instagram.com/ascalvetecontabilidade/?hl=pt-br')}>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/as.jpg' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/edatel.jpg' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/1.jpg' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/2.jpg' }} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <Image style={styles.carouselimg} source={{ uri: 'https://infocomn.com.br/assets/img/banners/3.jpg' }} />
                    </TouchableWithoutFeedback>
                </Swiper>
            </Container>
        )
    }
}
