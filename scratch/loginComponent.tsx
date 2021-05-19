import React from 'react'
import {Text, Button, View} from 'react-native'
import {Button as Btel}  from 'react-native-elements'

export function Login (){
    const loginFunc = ()=>{}
    return (
        <View>
            <Btel title='login' onPress={loginFunc}></Btel>
        </View>
    )
}