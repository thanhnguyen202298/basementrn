import React, { useContext } from 'react';
import 'react-native-gesture-handler'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {ContextPool, propsvalue} from '../myts/ContextModule'

export default class example extends React.PureComponent {

    constructor(props: any) {
        super(props)
    }
    
    render(){
      return(
        <Text>thanh</Text>
      )
    }
}

export class Anm extends example{
  render(){
    return(
      <View><Text>nhueynd</Text></View>
    )
  }
}

export function HomeScreen(props: any) {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#445566' : '#44aaff',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
  
          <View
            style={backgroundStyle}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
               screen and then come back to see your edits.
             </Section>
            <Section title="See Your Changes">
              your change contetn
             </Section>
            <Section title="Debug">
              debigu content
             </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
             </Section>
            <Section title="">link more link</Section>
  
            <Button title="click to details" onPress={() => props.navigation.navigate('Details')}></Button>
  
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export const DetailScreen: React.FC = ({ children, ...props }) => {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>chi tiet pages</Text>
        <Section title="">
          <Button title="click to Home" onPress={() => props.navigation.navigate('HomeScreen')}></Button>
        </Section>
        <Section title="">
          <Button title="click to popto top" onPress={() => props.navigation.popToTop()}></Button>
        </Section>
        <Button title="click to back" onPress={() => props.navigation.goBack()}></Button>
        <Section title="">
          {/* dưới đây là context Provider để truyền tham số trong component tree */}
          <ContextPool.Provider value={propsvalue}>
            <Section title=""></Section>
          </ContextPool.Provider>
        </Section>
      </View>
    );
  }

const Section: React.FC<{
    title: string;
  }> = ({ children, title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    let value = useContext(ContextPool)
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? '#000000' : '#000000',
            },
          ]}>
            {/* truy cập trực tiếp context value = useContext, không qua cónusmer */}
          {value.description?"11"+ value.description+"không dung cónusmer":""} 
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? '#000000' : '#ffffff',
            },
          ]}>
          {children}
  {/* duoi đây là context Consmer để nhận tham số tronog context*/}
          <ContextPool.Consumer>
            {(people) => (
              <Text style={[
                styles.sectionDescription,
                {
                  color:'#000000',
                },
              ]}>
                {people.name+ "\n"}
                {people.description}
              </Text>
            )}
          </ContextPool.Consumer>
        </Text>
      </View>
    );
  };

  
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });