import React, { Component } from 'react';
import { Button, StyleSheet, View,Text, TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { black } from 'jest-util/node_modules/chalk';
import { FlatList } from 'react-native-gesture-handler';
const IP = require('./ipcim'); 
export default class ButtonBasics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      ki_alap:0,
      data2:[],
      ki_alap2:0,
      data3:[],
      ki_alap3:0,
      data4:[],
      ki_alap4:0,
      data5:[],
      ki_alap5:0,
      data6:[],
      ki_alap6:0,
      data7:[],
      ki_alap7:0,
      data8:[],
      ki_alap8:0
    };
  } 

  async lefajta() {

    //Alaplap
    try {
      const response = await fetch(IP.ipcim+'alaplap');
      const json = await response.json();
      console.log(json)
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Processzor
    try {
      const response = await fetch(IP.ipcim+'processzor');
      const json = await response.json();
      console.log(json)
      this.setState({ data2: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

     //Videókártya
     try {
      const response = await fetch(IP.ipcim+'videokartya');
      const json = await response.json();
      console.log(json)
      this.setState({ data3: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Memória
    try {
      const response = await fetch(IP.ipcim+'memoria');
      const json = await response.json();
      console.log(json)
      this.setState({ data4: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

    //Tápegység
    try {
      const response = await fetch(IP.ipcim+'tapegyseg');
      const json = await response.json();
      console.log(json)
      this.setState({ data5: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }

        //Háttértár
        try {
          const response = await fetch(IP.ipcim+'hattertar');
          const json = await response.json();
          console.log(json)
          this.setState({ data6: json });
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
    
           //Gépház
           try {
            const response = await fetch(IP.ipcim+'gephaz');
            const json = await response.json();
            console.log(json)
            this.setState({ data7: json });
          } catch (error) {
            console.log(error);
          } finally {
            this.setState({ isLoading: false });
          }
        //Processzor hütő
        try {
          const response = await fetch(IP.ipcim+'processzor_huto');
          const json = await response.json();
          console.log(json)
          this.setState({ data8: json });
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
    
  

    
  }
  felvitel=()=>{
    alert("Választott alaplap ID-ja:"+this.state.ki_alap)
    var bemenet={
      bevitel1:this.state.ki_alap,
      bevitel2:this.state.ki_alap2,
      bevitel3:this.state.ki_alap3,
      bevitel4:this.state.ki_alap4,
      bevitel5:this.state.ki_alap5,
      bevitel6:this.state.ki_alap6,
      bevitel7:this.state.ki_alap7,
      bevitel8:this.state.ki_alap8

     
    }
  
fetch(IP.ipcim+'osszeallitott_gep', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => {
    alert(y)

  });
  }
  componentDidMount() {
    this.lefajta();
  }


  render() {
    return (
      //BEKELL TENNI FLATLISTBE MERT NEM FÉR KI!!!
    
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.hatter}>

          {/*Alaplap*/}

        <Text style={styles.alkatresz}>Alaplap</Text>
      <Picker style={styles.pickerstilus} 
              selectedValue={this.state.ki_alap}
              onValueChange={(itemValue) => this.setState({ki_alap:itemValue})}>
              {this.state.data.map(item=>
                <Picker.Item label={item.alaplap_nev} value={item.alaplap_id} />
              )}                                  
      </Picker>
      

          {/*Processzor*/}

      <Text style={styles.alkatresz}>Processzor</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap2}
              onValueChange={(itemValue) => this.setState({ki_alap2:itemValue})}>
              {this.state.data2.map(item=>
                <Picker.Item label={item.processzor_nev} value={item.processzor_id} />
              )}                                  
      </Picker>
      

          {/*Videókártya*/}

      <Text style={styles.alkatresz}>Videókártya</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap3}
              onValueChange={(itemValue) => this.setState({ki_alap3:itemValue})}>
              {this.state.data3.map(item=>
                <Picker.Item label={item.videokartya_nev} value={item.videokartya_id} />
              )}                                  
      </Picker>

           {/*Memória*/}

      <Text style={styles.alkatresz}>Memória</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap4}
              onValueChange={(itemValue) => this.setState({ki_alap4:itemValue})}>
              {this.state.data4.map(item=>
                <Picker.Item label={item.memoria_nev} value={item.memoria_id} />
              )}                                  
      </Picker>


      {/*Tápegység*/}

      <Text style={styles.alkatresz}>Tápegység</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap5}
              onValueChange={(itemValue) => this.setState({ki_alap5:itemValue})}>
              {this.state.data5.map(item=>
                <Picker.Item label={item.tapegyseg_nev} value={item.tapegyseg_id} />
              )}                                  
      </Picker>
      

       {/*Háttértár*/}

       <Text style={styles.alkatresz}>Háttértár</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap6}
              onValueChange={(itemValue) => this.setState({ki_alap6:itemValue})}>
              {this.state.data6.map(item=>
                <Picker.Item label={item.hattertar_nev} value={item.hattertar_id} />
              )}                                  
      </Picker>
                
       {/*Gépház*/}

       <Text style={styles.alkatresz}>Gépház</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap7}
              onValueChange={(itemValue) => this.setState({ki_alap7:itemValue})}>
              {this.state.data7.map(item=>
                <Picker.Item label={item.gephaz_nev} value={item.gephaz_id} />
              )}                                  
      </Picker>

       {/*Processzor hütő*/}

       <Text style={styles.alkatresz}>Processzor hütő</Text>
      <Picker style={styles.pickerstilus}
              selectedValue={this.state.ki_alap8}
              onValueChange={(itemValue) => this.setState({ki_alap8:itemValue})}>
              {this.state.data8.map(item=>
                <Picker.Item label={item.processzor_huto_nev} value={item.processzor_huto_id} />
              )}                                  
      </Picker>
          


     

      <TouchableOpacity style={styles.felvitel_gomb} onPress={()=>this.felvitel()}>
        <Text style={styles.felvitel_szoveg}>
          Felvitel
        </Text>
      </TouchableOpacity>

      <Text style={styles.eltuntet}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </Text>
     
      </ScrollView>
    </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor:'black'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hatter:{
    flex:1,
    marginTop:50,
    marginBottom:10,
    backgroundColor: '#9969D1',
    marginHorizontal: 20,
    borderRadius:20,
    borderColor:'purple',
    borderWidth:5,
    padding:10
  },
  pickerstilus:{
    textDecorationLine:'underline',
    borderColor:'black',
    borderWidth:5,
    borderRadius:20,
    height:1,
    width:300,
    backgroundColor:'white',
    margin:15,

  },
  alkatresz:{
    fontWeight:'bold',
    fontSize:25
  },
  felvitel_gomb:{
    alignSelf:'center',
    borderColor:'black',
    borderWidth:3,
    borderRadius:13,
    backgroundColor:'white',
    margin:20
    
  },
  felvitel_szoveg:{
    fontSize:22,
    padding:5,
    fontWeight:'bold'
  },
  eltuntet:{
    color:'#9969D1',
    margin:5,
    padding:1
  }

});