import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import DetailTask from './screens/DetailTask';
import AddTask from './screens/AddTask';
import { initializeDatabase } from './db/db';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  console.log('start App');
  initializeDatabase()
    .then(() => {
      console.log('Initialized database');
    })
    .catch(err => {
      console.log('Initializing db failed.');
      console.log(err);
    });
  const Stack = createNativeStackNavigator()



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailTask" component={DetailTask} />
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
