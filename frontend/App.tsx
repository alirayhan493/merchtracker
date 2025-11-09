import { StatusBar } from 'expo-status-bar';
import { TextInput, Button, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';




export default function App() {
  const router = useRouter();

  const addForm = () => router.push('/ProductForm');
  const searchProd = () => router.push('/Products');
  const damageList = () => router.push('/DamageList');
  
  return (
    <View style={styles.screen}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Merchandise Track App</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Button press!")}>
              <Text style={styles.buttonText}>Add Merch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Button press!")}>
              <Text style={styles.buttonText}>Search Merch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Button press!")}>
              <Text style={styles.buttonText}>Damage List</Text>
            </TouchableOpacity>
          </View>
        </View>
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
