import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.body}>
        <Text style={{fontSize:23,color:"white",fontWeight:"bold"}}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "brown",
    alignItems:"center",
    justifyContent:"center"
  }
});

export default App;
