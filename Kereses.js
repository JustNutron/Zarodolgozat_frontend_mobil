import React, {Component} from 'react';
import {TextInput, Pressable, StyleSheet, View, Text, FlatList, Image} from 'react-native';
const IP = require('./ipcim');

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      szo: "",
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
    const response = await fetch(IP.ipcim+'keresalap',{
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
      console.log(json2)

      try {
        const response3 = await fetch(IP.ipcim+'keresvideokartya',{
          method: "POST",
          body: JSON.stringify(bemenet),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        const json3 = await response3.json();
        console.log(json3)

        try {
          const response4 = await fetch(IP.ipcim+'kerestap',{
            method: "POST",
            body: JSON.stringify(bemenet),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          });
          const json4 = await response4.json();
          console.log(json4)

          try {
            const response5 = await fetch(IP.ipcim+'keresmemoria',{
              method: "POST",
              body: JSON.stringify(bemenet),
              headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            const json5 = await response5.json();
            console.log(json5)

            try {
              const response6 = await fetch(IP.ipcim+'keresgephaz',{
                method: "POST",
                body: JSON.stringify(bemenet),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              });
              const json6 = await response6.json();
              console.log(json6)

              try {
                const response7 = await fetch(IP.ipcim+'kereshatter',{
                  method: "POST",
                  body: JSON.stringify(bemenet),
                  headers: {"Content-type": "application/json; charset=UTF-8"}
                });
                const json7 = await response7.json();
                console.log(json7)

                try {
                  const response8 = await fetch(IP.ipcim+'keresprocihuto',{
                    method: "POST",
                    body: JSON.stringify(bemenet),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                  });
                  const json8 = await response8.json();
                  console.log(json8)

      for (const element of json) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.alaplap_marka,
          "elemnev" : element.alaplap_nev,
          "elemkep" : element.alaplap_kep,
          "elemtipus" : "alaplap"
        }
        datatomb.push(elem)
        szamlalo++
      }
      for (const element of json2) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.processzor_marka,
          "elemnev" : element.processzor_nev,
          "elemkep" : element.processzor_kep,
          "elemtipus" : "proci"
        }
        datatomb.push(elem)
        szamlalo++
      }

      for (const element of json3) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.videokartya_marka,
          "elemnev" : element.videokartya_nev,
          "elemkep" : element.videokartya_kep,
          "elemtipus" : "videokartya"
        }
        datatomb.push(elem)
        szamlalo++
      }

      for (const element of json4) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.tapegyseg_marka,
          "elemnev" : element.tapegyseg_nev,
          "elemkep" : element.tapegyseg_kep,
          "elemtipus" : "tapegyseg"
        }
        datatomb.push(elem)
        szamlalo++
      }


      for (const element of json5) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.memoria_marka,
          "elemnev" : element.memoria_nev,
          "elemkep" : element.memoria_kep,
          "elemtipus" : "memoria"
        }
        datatomb.push(elem)
        szamlalo++
      }

      for (const element of json6) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.gephaz_marka,
          "elemnev" : element.gephaz_nev,
          "elemkep" : element.gephaz_kep,
          "elemtipus" : "gephaz"
        }
        datatomb.push(elem)
        szamlalo++
      }

      for (const element of json7) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.hattertar_marka,
          "elemnev" : element.hattertar_nev,
          "elemkep" : element.hattertar_kep,
          "elemtipus" : "hattertar"
        }
        datatomb.push(elem)
        szamlalo++
      }

      for (const element of json8) {
        let elem = {
          "elemid" : szamlalo,
          "elemmarka" : element.processzor_huto_marka,
          "elemnev" : element.processzor_huto_nev,
          "elemkep" : element.processzor_huto_kep,
          "elemtipus" : "processzor_huto"
        }
        datatomb.push(elem)
        szamlalo++
      }
      //alert(JSON.stringify(datatomb))
      this.setState({ dataSource: datatomb });

                } catch (error) {
                  console.log(error);
                } finally {

                }

              } catch (error) {
                console.log(error);
              } finally {
      
              }

            } catch (error) {
              console.log(error);
            } finally {

            }

          } catch (error) {
            console.log(error);
          } finally {
      
          }

        } catch (error) {
          console.log(error);
        } finally {
    
        }

      } catch (error) {
        console.log(error);
      } finally {
      
      }

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
        <View style={{flex: 0.7, backgroundColor: 'purple', borderRadius: 30, marginLeft: 20, marginTop: 20, marginRight: 20}}>
            <View style={styles.barview}>
            <TextInput
              style={{backgroundColor: 'white', padding: 10, borderRadius: 20, color: 'purple'}}
              placeholder="Termék keresése"
              onChangeText={(szoveg) => this.setState({szo : szoveg})}
              value={this.state.szo}
      />         
            </View>
            <View style={styles.buttonview}>
                <Pressable onPress={()=>this.kattintas()}>
                    <Text style={{alignSelf: 'center', marginTop: 20 ,paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 ,backgroundColor: '#9D1DA7', borderRadius: 10, color: 'white'}} >Keresés</Text>
                </Pressable>
                
            </View>
        </View>
        <View style={{flex: 2.3, backgroundColor: 'black', margin: 20 }}>
        <FlatList
            data={this.state.dataSource}
            keyExtractor={({ elemid }, index) => elemid}
            renderItem={({ item }) => (
                
              <View style={{marginBottom:30}}>
                <View style={{}}>
                    <Text style={styles.marka}>
                      {item.elemmarka}
                    </Text>
                </View>
                  <Text style={styles.szoveg}>
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
  szoveg: {
    color: 'white',
    marginLeft: 5,
    padding: 10
  },
  marka: {
    fontSize: 20,
    color: 'white',
    margin: 5

  }
});