import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button 
                    title='Abrir'
                    onPress={()=> props.navigation.openDrawer()}
                />
        </View>
        <TextoCentral corFundo='#33fa72' corTexto='#000'>
            Tela D
        </TextoCentral>
        </View>
    )
}