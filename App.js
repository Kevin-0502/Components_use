import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import Lista from './components/Lista';
import { ListItem } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>List Items</Text>
      <ScrollView style={styles.scrollstyle}>
      <Lista/>
      
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
  },
  scrollstyle:{
    backgroundColor: 'lightblue',
  }
});
