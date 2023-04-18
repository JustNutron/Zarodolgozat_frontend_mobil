import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,View,Text,Button, TouchableOpacity,onChangeText} from 'react-native';

const TextInputExample = () => {
  
  
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.focim}>
        Regisztráció
      </Text>
      <Text style={styles.szoveg}>
        Hozz létre fiókot hogy elérhesd az alkalmazásunk összes funkcióját.
      </Text>

      <Text style={styles.bevitel}>
        Felhasználónév
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        placeholder="Felhasználónév"
      />
       <Text style={styles.bevitel}>
        Jelszó
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        placeholder="Jelszó"
        
      />
       <Text style={styles.bevitel}>
        E-mail
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        
        placeholder="E-Mail"
       
      
      />
      <TouchableOpacity>
        <Text style={styles.gombocska}>
          Regisztrálok!
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'thistle',
    borderRadius:16
  },
  container:{
    margin:30,
    marginTop:20,
    
  },
  focim:{
    margin:30,
    alignSelf:'center',
    fontSize:32,
    textTransform:'uppercase',
    fontWeight:'bold'
  },
  gombocska:{
    alignSelf:'center',
    marginTop:20,
    fontSize:22,
    borderColor:"black",
    borderRadius:10,
    borderWidth:2,
    padding:6,
    fontWeight:'bold'
  },
  szoveg:{
    margin:10,
    alignSelf:'center',
    marginTop:0,
    fontSize:18,
    fontStyle:'italic'
    
  },
  bevitel:{
    fontSize:16,
    textDecorationLine:'underline'
  }
});

export default TextInputExample;