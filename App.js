import About from './views/About';
import HomeRoute from './routes/HomeRoute';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeRoute} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
