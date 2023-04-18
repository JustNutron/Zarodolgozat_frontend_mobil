import * as React from 'react';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Processzorok from './Processzorok'
import Alaplapok from './Alaplapok'
import Kezdolap from './Kezdolap'
import Beallitasok from './Beallitasok'
import Profil from './Profil'
import Pcepites from './Pcepites'
import Videokartya from './Videokartya'
import Gephaz from './Gephaz'
import Alkatreszek from './Alkatreszek'
import Kereses from './Kereses'
import Jatekok from './Jatekok'
import Tapegyseg from './Tapegyseg'
import Memoria from './Memoria'
import Processzor_huto from './Processzor_huto'
import Hattertar from './Hattertar'

function Alkatreszek_lap({ navigation }) {
  return (
    <Alkatreszek navigation={ navigation } />
  );
}

function Kereses_lap({ navigation }) {
  return (
    <Kereses navigation={ navigation } />
  );
}

function Alaplapok_lap({ navigation }) {
  return (
    <Alaplapok navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Tapegyseg_lap({ navigation }) {
  return (
    <Tapegyseg navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Memoria_lap({ navigation }) {
  return (
    <Memoria navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Processzor_huto_lap({ navigation }) {
  return (
    <Processzor_huto navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Hattertar_lap({ navigation }) {
  return (
    <Hattertar navigation={navigation}
      options={{headerShown: false }}/>
  );
}


function Processzorok_lap({ navigation }) {
  return (
   <Processzorok navigation={ navigation }
    options={{headerShown: false}}/>
  );
}

function Jatekok_lap({ navigation }) {
  return (
   <Jatekok navigation={ navigation }
    options={{headerShown: false}}/>
  );
}

function Videokartya_lap({ navigation }) {
  return (
    <Videokartya navigation={navigation}
      options={{headerShown: false }}/>
  );
}

function Gephaz_lap({ navigation }) {
  return (
    <Gephaz navigation={navigation}
      options={{headerShown: false }}/>
  );
}

//Istimtől nekem
function Pcepites_lap({ navigation }) {
  return (
    <Pcepites navigation={ navigation } />
  );
}

function Kezdo_lap({ navigation }) {
  return (
    <Kezdolap/>
  );
}

function Profil_lap({ navigation }) {
  return (
   <Profil />
  );
}

function Beallitasok_lap({ navigation }) {
  return (
   <Beallitasok />
  );
}

function Root({ navigation }) {
  return (
    <Drawer.Navigator useLegacyImplementation
        screenOptions={{drawerStyle: {backgroundColor: '#8D75AA', width: 260},
        headerShown: false, drawerActiveTintColor: 'purple',
        }} >
        <Drawer.Screen name="Kezdőlap" component={Kezdo_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='home' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Keresés" component={Kereses_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='search' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="PC Építés" component={Pcepites_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='build' size={22} color={color}/>
          )
        }}/>
         <Drawer.Screen name="Alkatrészek" component={Alkatreszek_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='basket' size={22} color={color}/>
          )
        }}/>
        
        <Drawer.Screen name="Játékok" component={Jatekok_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='play' size={22} color={color}/>
          )
        }}/>
        
        
        <Drawer.Screen name="Profil" component={Profil_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='person' size={22} color={color}/>
          )
        }}/>
        
        {/*
        <Drawer.Screen name="Beállítások" component={Beallitasok_lap} options={{
          drawerIcon: ({color}) => (
            <Ionicons name='settings' size={22} color={color}/>
          )
        }}/>
        
        <Drawer.Screen name="Processzorok" component={Processzorok_lap} />
        <Drawer.Screen name="Alaplapok" component={Alaplapok_lap} />
        */} 
      </Drawer.Navigator>


    

  );
}



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Alaplapok" component={Alaplapok} options={{headerShown: false}}/>
    <Stack.Screen name="Processzorok" component={Processzorok} options={{headerShown: false}} />
    <Stack.Screen name="Videokartya" component={Videokartya} options={{headerShown: false}} />
    <Stack.Screen name="Gephaz" component={Gephaz} options={{headerShown: false}} />
    <Stack.Screen name="Tapegyseg" component={Tapegyseg} options={{headerShown: false}} />
    <Stack.Screen name="Memoria" component={Memoria} options={{headerShown: false}} />
    <Stack.Screen name="Processzor_huto" component={Processzor_huto} options={{headerShown: false}} />
    <Stack.Screen name="Hattertar" component={Hattertar} options={{headerShown: false}} />


    </Stack.Navigator>
    </NavigationContainer>
  );
}