import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler'
import {
    Button, SafeAreaView, ScrollView, StatusBar, StyleSheet,
    Text, useColorScheme, View, Image, Dimensions
} from 'react-native'


import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { ColorsSys } from './Color'
import { getContext } from './StoreProvider'
import { Action } from './action'

export function Home(props: any) {
    const { state, dispatch } = getContext()
    const isDarkMode = useColorScheme() === 'dark'
    const backgroundStyle = {
        backgroundColor: isDarkMode ? ColorsSys.dark.background : ColorsSys.light.background,
    };
    const handleClick = () => {
        dispatch({ text: 'thanhngiyen' + JSON.stringify(state) })
    }
    const nextDetials = () => {
        props.navigation.navigate('Details')
    }
    const writelog = content => console.log(content)
    // useEffecct run function sau khi render,
    useEffect(() => {
        if (state.isOpen === true) {
            props.navigation.toggleDrawer()
            dispatch({ type: Action.openDraw, isOpen: false })
        }
    })

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#555500" barStyle={isDarkMode ? ColorsSys.dark.statusBar : ColorsSys.light.statusBar} />
            <ScrollView contentInsetAdjustmentBehavior='automatic' style={backgroundStyle}>
                <Ssmemo header="fullpageTop">hello
                home page
                </Ssmemo>

                <Ssmemo header="go to inner" style={{
                    flex: 1,
                    alignItems: 'flex-end',
                }}>
                    <SSBtn title="DetailsPage Btn"
                        onPress={nextDetials} />
                </Ssmemo>

                <SSBtn title="click" onPress={handleClick} />
                <Ssmemo header="result">
                    {JSON.stringify(state)}
                </Ssmemo>
            </ScrollView>
        </SafeAreaView>
    )
}

export function Detail(props: any) {
    const backward = () => {
        // props.navigation.popToTop()
        // props.navigation.navigate('Home')
        props.navigation.goBack()
    }
    const updateTitle = () => {
        props.navigation.setOptions({ title: "thanhf thi tho" })
    }

    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Ssmemo header="chi tiet">
                    thanh ngiuent
                </Ssmemo>
                <Ssmemo header="navigate area">
                    <Button title="backto prev home" onPress={backward}></Button>
                </Ssmemo>
                <Ssmemo header="update title">
                    <Button title="update content"
                        onPress={updateTitle}></Button>
                </Ssmemo>
            </ScrollView>
        </SafeAreaView>
    )
}

export const Page2 = (props:any) => {
    return (
        <Text style={{ backgroundColor: '#33ffff', flex: 1, alignItems: 'center' }}>trang 2</Text>
    )
}

export const Page3 = (props:any) => {
    return (
        <Text style={{ backgroundColor: '#33ff00', flex: 1, alignItems: 'center' }}>three</Text>
    )
}

export const Tabview = (props:any) => {
    const placHolder = ({ route }) => {
        return (
            <Text>Loading {route.title}..</Text>)
    }
    
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    const [index, setindex] = useState(0)

    return (
        <TabView lazy
            navigationState={{ index, routes }}
            renderScene={
                SceneMap({
                    first: Page2,
                    second: Page3
                })
            }
            onIndexChange={setindex}
            renderLazyPlaceholder={placHolder}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={{}}
        />
    )
}

function Section(props: any) {
    useEffect(() => {
        console.log("render " + props.header)
    })
    return (
        <View style={props.style}>
            <View style={props.styleHeader}>
                <Text>
                    {props.header}
                </Text>
            </View>
            <View style={props.styleContent}>
                <Text>
                    {props.children}
                </Text>
            </View>
        </View>
    )
}

function equalProps(prop1: any, prop2: any) {
    let ress = prop1.header === prop2.header && prop1.children === prop2.children
    if (prop1.header === 'go to inner') { }
    return ress
}

//dung memo component tranh render khi ko thay doi state
const Ssmemo = React.memo(Section, equalProps)
const SSBtn = React.memo(Button)
