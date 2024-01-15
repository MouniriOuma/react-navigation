import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleListeScreen from './screens/ArticleListeScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='List' screenOptions={{statusBarColor: 'green',headerTintColor: 'green',headerTitleAlign: 'center'
    }}>
        <Stack.Screen name='ArticleList' component={ArticleListeScreen} />
        <Stack.Screen name='ArticleDetails' component={ArticleDetailsScreen} />
    
        </Stack.Navigator>
      </NavigationContainer>
      );
  
}