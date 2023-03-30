import React, {Component} from 'react';
import {TextInput, Pressable, StyleSheet, View, Text, FlatList, Image} from 'react-native';
const IP = require('./ipcim');

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      szo: "",
      dataSource2: [],
      dataSource3: [],
      dataSource: [],
    };
  }

  kattintas=async ()=>{
  var datatomb=[]
  var szamlalo=0
  var bemenet={
    bevitel1:this.state.szo
    
   
  }
  try {
    
    const response = await fetch(IP.ipcim+'keresproci',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    const json = await response.json();
    console.log(json)

    try {
      const response2 = await fetch(IP.ipcim+'keresproci',{
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      const json2 = await response2.json();
      console.log(json)
      for (const element of json) {
        let elem = {
          "elemid" : szamlalo,
          "elemnev" : element.alaplap_neve,
          "elemkep" : element.alaplap_kep,
          "elemtipus" : "alaplap"
        }
        datatomb.push(elem)
        szamlalo++
      }
      for (const element of json2) {
        let elem = {
          "elemid" : szamlalo,
          "elemnev" : element.processzor_neve,
          "elemkep" : element.processzor_kep,
          "elemtipus" : "proci"
        }
        datatomb.push(elem)
        szamlalo++
      }
      alert(JSON.stringify(datatomb))
      this.setState({ dataSource: datatomb });
    } catch (error) {
      console.log(error);
    } finally {
      
    }


   
  } catch (error) {
    console.log(error);
  } finally {
    
  }
}

  
  
  render() {
    return (
      
      <View style={[styles.container,
        {
            flexDirection: "column"
        }]}>
        <View style={{flex: 1, backgroundColor: 'purple', borderRadius: 10, borderColor:'white', border: 10}}>
            <View style={styles.barview}>
            <TextInput
              style={{height: 40, margin:10, padding:10, backgroundColor: 'white'}}
              placeholder="Termék"
              
              
              
              onChangeText={(szoveg) => this.setState({szo : szoveg})}
              
              value={this.state.szo}
              
      />       
                
            </View>
            <View style={styles.buttonview}>
                <Pressable onPress={()=>this.kattintas()}>
                    <Text style={{alignSelf: 'center', marginTop: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 ,backgroundColor: '#9D1DA7', borderRadius: 10, color: 'white'}} >Keresés</Text>
                </Pressable>
                
            </View>
        </View>

          
        <View style={{flex: 2, backgroundColor: 'black'}}>
        <FlatList
            data={this.state.dataSource}
            keyExtractor={({ elemid }, index) => elemid}
            renderItem={({ item }) => (

              <View style={{marginBottom:30}}>
              
              <Text style={{color: 'white'}}>
                {item.elemnev}
              </Text>
              
              
              <Image source={{uri: IP.ipcim+item.elemkep+'.png'}} style={styles.kep}/>    
              </View>

          
            )}
          />

          
        </View> 
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "black"
  },
  searcbar: {
    marginBottom: 50
  },

  barview: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  buttonview: {
    marginLeft: 100,
    marginRight: 100
  },
  marka:{
    textAlign:'left',
    fontSize:21,
    color:'white',
    fontWeight:'bold',
    margin:5,
    textShadowOffset:{
      height:5,
      width:5
    },
    textShadowColor:'black',
    textShadowRadius:10
  },
  kep:{
    width:150,
    height:150,
    alignSelf:'flex-start',
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5,
    marginLeft:10
  },
});

