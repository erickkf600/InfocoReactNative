import React from 'react'
import { createDrawerNavigator, createAppContainer } from "react-navigation"
//SIDEBAR
import Home from './Paginas/Home'
import Contato from './Paginas/Contato'
import Planos from './Paginas/Planos'
import Sobre from './Paginas/Sobre'
import Faq from './Paginas/Faq'
/******************************************/
import AdesaoPage from './Components/AdesaoPage'
import Detalhes from './Components/Detalhes'
import CategoriaPage from './Components/CategoriaPage'
import SearchPage from './Paginas/SearchPage'
import CustomDrawer from './Header/Sidebar'

const AppConteudo = createDrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        Contato: {
            screen: Contato,
        },
        Planos: {
            screen: Planos,
        },
        Sobre: {
            screen: Sobre,
        },
        Faq: {
            screen: Faq,
        },
        /*****Componets*****/
        AdesaoPage: {
            screen: AdesaoPage,
        },
        Detalhes: {
            screen: Detalhes,
        },
        CategoriaPage: {
            screen: CategoriaPage,
        },
        SearchPage: {
            screen: SearchPage,
        },
    },
    {
        initialRouteName: "Home",
        contentComponent: ({ navigation }) => {
            return (<CustomDrawer navigation={navigation} />)
        },
        
        /*drawerPosition: 'left',
        drawerWidth: 300 
        hideStatusBar: true,
        contentComponent: CustomDrawer,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',*/
    },
);

export default createAppContainer(AppConteudo);