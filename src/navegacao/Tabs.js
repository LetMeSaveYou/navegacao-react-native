import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const StackBottom = createBottomTabNavigator ()

export default props => (
    <StackBottom.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size})=> {
            let iconName

            switch (route.name) {
                case 'TelaA':
                    iconName = focused
                    ? 'android-information-circle'
                    : 'android-information-circle-outline'
                    break;
                case 'TelaB':
                    iconName = focused
                    ? 'android-information-circle'
                    : 'android-information-circle-outline'
                    break;
                case 'TelaC':
                    iconName = focused
                    ? 'android-information-circle'
                    : 'android-information-circle-outline'
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />
        },
    })}

    
    
    tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        showLabel: false,
        labelStyle: {fontSize: 30}
    }}>
        <StackBottom.Screen name="TelaA" component={TelaA} />
        <StackBottom.Screen name="TelaB" component={TelaB} />
        <StackBottom.Screen name="TelaC" component={TelaC} />
    </StackBottom.Navigator>
)