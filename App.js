

import React , {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,

  View,
} from 'react-native';




const App =  () => {
  const [değişkenim , setDeğişkenim] = useState(0)

  return (
    <View>
      <Text style={{
        textAlign : "center",
        fontSize : 30,
        color : "purple"
      }}>
        {değişkenim}
      </Text>
      <Button title='deneme' onPress={() => {
        setDeğişkenim(değişkenim + 1)
      }} style = {{
        backgroundColor : "green"
      }}>
      
      </Button>
      <Text style={{
        textAlign : "center",
        fontSize : 30,
        color : "purple"
      }}>
        {değişkenim}
      </Text>
      <Button title='deneme' onPress={() => {
        setDeğişkenim(değişkenim + 1)
      }} style = {{
        backgroundColor : "green"
      }}>
      
      </Button>
      <Text style={{
        textAlign : "center",
        fontSize : 30,
        color : "purple"
      }}>
        {değişkenim}
      </Text>
      <Button title='deneme' onPress={() => {
        setDeğişkenim(değişkenim + 1)
      }} style = {{
        backgroundColor : "green"
      }}>
      
      </Button>
      <Text style={{
        textAlign : "center",
        fontSize : 30,
        color : "purple"
      }}>
        {değişkenim}
      </Text>
      <Button title='deneme' onPress={() => {
        setDeğişkenim(değişkenim + 1)
      }} style = {{
        backgroundColor : "green"
      }}>
      
      </Button>
      <Text style={{
        textAlign : "center",
        fontSize : 30,
        color : "purple"
      }}>
        {değişkenim}
      </Text>
      <Button title='deneme' onPress={() => {
        setDeğişkenim(değişkenim + 1)
      }} style = {{
        backgroundColor : "green"
      }}>
      
      </Button>
      
    </View>
  );
};



export default App;
