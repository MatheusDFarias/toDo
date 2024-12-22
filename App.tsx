import { BackHandler, StatusBar, StyleSheet, Text, View, Image  } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
          style={styles.title}
          source={require('./assets/logo.png')}/>
        <Home/>     
        <StatusBar          
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />           
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor:'#0D0D0D',
  },    
  title:{
    width: 200,
    height: 200,
    alignSelf:'center'
},

});
