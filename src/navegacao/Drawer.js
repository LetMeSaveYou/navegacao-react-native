import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'


const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="TelaA">
        <Drawer.Screen name="tela 1" component={TelaA} />
        <Drawer.Screen name="tela 2" component={TelaB} />
        <Drawer.Screen name="tela 3" component={TelaC} />
        <Drawer.Screen name="tela 4" component={TelaD} />
    </Drawer.Navigator>
)