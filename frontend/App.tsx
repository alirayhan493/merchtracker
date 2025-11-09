import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductForm from './productForm';



type RootStackParamList = {
  Home: undefined;
  ProductForm: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function HomeScreen({ navigation } : any){
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text>Welcome to Merch Tracker!</Text>
      <TouchableOpacity
      style={{
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
      }}
      
      onPress={() => navigation.navigate("ProductForm")}
      >
        <Text style={{ color: "#fff", fontWeight: "bold"}}>Go to Product Form</Text>
      </TouchableOpacity>
    </View>
  )
}



export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' id={undefined}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='ProductForm' component={ProductForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
});
