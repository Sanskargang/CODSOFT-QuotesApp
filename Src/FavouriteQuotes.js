import React from "react";
import { StyleSheet, Text, View, Button ,TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export  function Favourite({navigation: { goBack }}) {
  return(
    <View style={styles.container}>
            <View style={styles.container1}>
              <View>
              <TouchableOpacity onPress={() => { goBack()}} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 12,alignItems:'center',justifyContent:'center' }}>
                        <FontAwesome name="home" size={30} color='#5372F0' style = {{}} />
                    </TouchableOpacity>
              </View>
            </View>
        </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5372F0',
  },
  container1: {
      width: '90%',
      height:'95%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
  },
  container3: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      marginTop: 25,
      height: '7%',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: '600',
      color: '#333',
      marginBottom: 15,
  },
  text1: {
      color: '#000',
      fontSize: 16,
      lineHeight: 26,
      letterSpacing: 1.1,
      fontWeight: '400',
      textAlign: 'center',
      marginBottom: 10,
      paddingHorizontal: 20,
  },
  touch: {
      backgroundColor: '#5372F0',
      padding: 20,
      borderRadius: 30,
      marginVertical: 20,
      alignItems: 'center',
  },
  text3: {
      color: 'white',
      fontSize: 18,
  },
  authortext: {
      textAlign: 'right',
      fontWeight: '300',
      fontStyle: 'italic',
      fontSize: 16,
      color: '#000',
      top: 5,
  },
  container2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
  }
});