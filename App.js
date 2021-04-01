import * as React from 'react';
import { Button, View, Text, Icon } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {DrawerContent} from './screens/DrawerContent';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome HomeScreen!</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome ProfileScreen!</Text>
    </View>
  );
}

function BookmarksScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome BookmarksScreen!</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome NotificationsScreen!</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BookmarksStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={
    {
      headerStyle: {
        backgroundColor: '#eb6e4b',      
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title: 'HomeScreen',
    headerLeft: () => (
      <Ionicons name='ios-menu' size={25} backgroundColor='009387' color="white" onPress={()=>{navigation.openDrawer()}}></Ionicons>
    )
    }}/>
</HomeStack.Navigator>
)

const ProfileStackScreen  = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={
    {
      headerStyle: {
        backgroundColor: '#eb6e4b',      
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      title: 'ProfileScreen',
      headerLeft: () => (
        <Ionicons name='ios-menu' size={25} backgroundColor='009387' color="white" onPress={()=>{navigation.openDrawer()}}></Ionicons>
      )
    }}/>
  </ProfileStack.Navigator>
)

const BookmarksStackScreen  = ({navigation}) => (
    <BookmarksStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: '#eb6e4b',      
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }>
    <BookmarksStack.Screen name="BookmarkScreen" component={BookmarksScreen} options={{
      title: 'BookmarksScreen',
      headerLeft: () => (
        <Ionicons name='ios-menu' size={25} backgroundColor='009387' color="white" onPress={()=>{navigation.openDrawer()}}></Ionicons>
      )
    }}/>
  </BookmarksStack.Navigator>
)

const NotificationsStackScreen  = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: '#eb6e4b',      
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }>
    <NotificationsStack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{
      title: 'NotificationsScreen',
      headerLeft: () => (
        <Ionicons name='ios-menu' size={25} backgroundColor='009387' color="white" onPress={()=>{navigation.openDrawer()}}></Ionicons>
      )
    }}/>
  </NotificationsStack.Navigator>
)



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Bookmark" component={BookmarksStackScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
