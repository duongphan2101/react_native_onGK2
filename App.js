import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import scrLogin from './screen/scrLogin';
import scrHome from './screen/scrHome';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/EvilIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Login" 
          component={scrLogin} 
          options={{headerShown: false}} 
        />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Electronic" 
          component={scrHome} 
          options={({ navigation }) => ({
            headerTitle: "",
            headerLeft: () => (
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon 
                  name='chevron-left' 
                  size={40} 
                  color='gray' 
                  onPress={() => LoginStack()}
                />
                <Text style={{fontSize: 18, fontWeight: '400'}}>Electronic</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Icon name='cart' size={40} color='gray'/>
                <Icon name='user' size={40} color='black'/>
              </View>
            ),
          })}
        />
    </Stack.Navigator>
  );
}

function MyTab(){
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={HomeStack} options={{
          tabBarIcon: () => (
            <IconFont name="home" color='cyan' size={30} />
          ),
        }}/>
        <Tab.Screen name='Search' component={HomeStack} options={{
          tabBarIcon: () => (
            <IconFont name="search" color='gray' size={30} />
          ),
        }}/>
        <Tab.Screen name='Favourite' component={HomeStack} options={{
          tabBarIcon: () => (
            <IconFont name="heart" color='gray' size={30} />
          ),
        }}/>
        <Tab.Screen name='Inbox' component={HomeStack} options={{
          tabBarIcon: () => (
            <IconFont name="envelope" color='gray' size={30} />
          ),
        }}/>
        <Tab.Screen name='Acount' component={HomeStack} options={{
          tabBarIcon: () => (
            <IconFont name="user" color='gray' size={30} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <MyTab options={{headerShown: false}}/>
    </NavigationContainer>
  );
}