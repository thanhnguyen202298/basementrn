
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Detail, Page2, Page3, Tabview} from '../BaseComponent'
import {Image, StyleSheet} from 'react-native'
import React from 'react'


const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

export function HomeDrawer(props: any) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="details" component={Detail} options={{
                drawerIcon:(props)=>{
                    return(
                        <Image style={styles.icon}  source={require('../../assets/hinh1.jpg')}></Image>
                    )
                }
            }} />
            <Drawer.Screen name='Tabbot' component={TabBot} options={{
                headerShown:false
            }}/>
        </Drawer.Navigator>
    )
}

function TabBot() {
    return (
        <Tab.Navigator initialRouteName='trang 2'>
            <Tab.Screen name='trang 3' component={Page3} options={{
                tabBarIcon: (props) => {
                    return (
                        <Image source={require('../../assets/hinh1.jpg')} />
                    )
                }
            }} />
            <Tab.Screen name='trang 2' component={Page2} />
            <Tab.Screen name='tabview' component={Tabview} />

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});