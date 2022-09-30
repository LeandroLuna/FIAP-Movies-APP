import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../views/Detail';
import Home from '../views/Home';

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Homepage' component={Home} />
      <Stack.Screen name='Detail' component={Detail} />
    </Stack.Navigator>
  );
}
