import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Card from './components/Card/Card'
import Details from './components/Details/Details'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Card data
const foodData = {
  name:['Chicken with mole','Pizza with mole','Thai without mole'],
  img:['https://cdn.kiwilimon.com/recetaimagen/32173/th5-640x426-37043.jpg',
  'https://cdn.kiwilimon.com/recetaimagen/31455/th5-640x426-36067.jpg',
  'https://mahatmarice.com/wp-content/uploads/2019/05/Pad-Thai-Fried-Rice-w-Japanese-Omelet.jpg'],
  desc:['The word mole comes from Nahuatl mulli, sauce or stew. It is a term that names an infinite number of complex stews, usually made with a thick sauce. In the pre-Hispanic era, various ground sauces were prepared and with many ingredients that over the years and centuries were modified, refined and adapted the techniques and ingredients that the Spanish brought recently. Until resulting in the infinity of recipes and dishes known as mole of those who enjoy Mexican cuisine.',
'Try this delicious unique pizza made with a rich chicken with mole that gives the perfect touch to your food.',
'It doesnt have mole on it, isnt worth enough']
}

function foodCard({navigation}){
  return(
    <ScrollView style={styles.container}>
      <Card name={foodData.name[0]} img={foodData.img[0]} desc={foodData.desc[0]} navigation={navigation}/>
      <Card name={foodData.name[1]} img={foodData.img[1]} desc={foodData.desc[1]} navigation={navigation}/>
      <Card name={foodData.name[2]} img={foodData.img[2]} desc={foodData.desc[2]} navigation={navigation}/>
    </ScrollView>
  )
}

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={foodCard} options={{ title: '365 Restaurant' }}/>
            <Stack.Screen name="Food Details" component={Details} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

//style css
const styles = StyleSheet.create({
  container: {
    backgroundColor:'red',
    borderWidth:5,
    borderRadius:5
  },
  Stack: {
    color:'red',
    fontWeight:"bold",
    padding:10,
    fontSize:20
},
btn:{
    backgroundColor:'#FFFFFF',
    width:'50%',
    maxWidth:100,
    margin:5
  },
  descriptionText:{
    fontSize:25,
    textAlign:"center",
    margin:5
  }
});
