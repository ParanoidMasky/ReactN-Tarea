import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Details({route}){
    const name  = route.params.name;
    const desc  = route.params.desc;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.descText}>{name}</Text>
        <Text style={styles.descText}>{desc}</Text>
      </View>
    )
  }

  export default Details

  //Detais window css
  const styles = StyleSheet.create({
    descText:{
      fontSize:25,
      textAlign:"justify",
      margin:20
    }
  });
  