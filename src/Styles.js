import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//SIDEBAR
export const Footer = styled.View`
  height: 40px;
  flex-direction: row;
  background-color: #f2f2f2;
  border-top-width: 1;
  border-color: lightgray;
`
export const Sidebar = styled.View`
  display: flex;
  flex: 1;
`
export const Li = styled.Text`
  font-size: 16px;
  color: #525252;
`
export const Span = styled.Text`
  color: #4d4d4d;
  font-size: 13;
  font-weight: 600;
`
export const Div = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10;
`
export const Container = styled.View`
  min-height: 100%;
  background-color: #fff;
  z-index: 9999;
`
export const styles = StyleSheet.create({
  //HEADER
  logo: {
    width: wp('22%'),
    marginRight: 100,
  },
  navbar: {
    backgroundColor: '#ef8c32',
    height: hp('8%'),
  },
  //SIDEBAR
  sidebar: {
    backgroundColor: '#ef8c32',
    height: hp('22%'),
  },
  sideback: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 20,
    maxWidth: '50%',
    height: '70%',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  sidelogo: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  item: {
    borderBottomWidth: .8,
    borderColor: 'lightgray',
  },
  creditos: {
    marginLeft: 10,
    fontSize: 12,
  },
  versao: {
    textAlign: 'right',
    marginRight: 20,
    color: 'gray',
    fontSize: 9,
  },

  //CAROULSEL
  carousel: {
    height: hp('25%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  carouselimg: {
    width: wp('100%'),
    height: hp('25%'),
  },
  //CATEGORIAS
  category: {
    flex: 3,
    height: hp('10%'),
  },
  categicon: {
    width: 45,
    height: 35,
    marginTop: 15,
  },
  categitem: {
    paddingHorizontal: 25,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textitem: {
    color: '#858585',
    fontSize: 12,
  },

  // ADESÃO
  adcont: {
    flex: 1,
    marginTop: 15,
    height: 100,
    borderWidth: 3,
    borderColor: '#ef8c32',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  adimg: {
    width: 100,
    height: 80,
  },
  adbutton: {
    backgroundColor: '#ef8c32',
    width: '60%',
    height: '40%'
  },
  adbuttontxt: {
    color: '#fff',
    fontSize: 15,
  },
  //DESTAQUES CARDS
  flatlist:{
    marginTop: 20,
    flex: 1,
  },
  thumbnail:{
    alignSelf: 'center',
    marginTop: 3,
  },
  itemContainer:{
    flex: 1,
    borderWidth: 2,
    borderColor: '#ef8c32',
    borderRadius: 2,
  },
  saibamais:{
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ef8c32', 
  },

  textbutton:{
    fontSize: 16,
    color: '#fff',
  },

  //DETALHES PAGE
  dtlimg: {
    width: wp('95%'),
    height: hp('42%'),
    marginTop: 2,
  },
  dtlcard:{
    alignItems: 'center',
  },  
  visitarbtn:{
    backgroundColor: '#ef8c32',
    width: '100%',
    padding: 15,
  },
});
//SOBRE  PAGE/
export const sobre = StyleSheet.create({
  texts:{
    flex: 1,
    alignItems: 'center',
  },
  h1:{
    textAlign: 'center',
    marginTop: 25,
    color: '#3A3A3A',
  },
  logo:{
    width: wp('58%'),
    height: hp('38%'),
    alignSelf: 'center',
  },
  textos:{
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
  text:{
    textAlign: 'justify',
    fontSize: 17.5,
    color: '#727272',
    marginVertical: 10,
  },
  botao:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3A3A3A',
    justifyContent: 'center',
    paddingVertical: 15
  },
})


//PLANOS  PAGE/
export const planos = StyleSheet.create({
  header:{
    justifyContent: 'center',
  },
  benef:{
    color: '#ef8c32',
    fontSize: 17,
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ef8c32',
  },
  adbutton:{
    backgroundColor: '#ef8c32',
    paddingVertical: 30,
  },
})