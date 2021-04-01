import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import { 
    DrawerContentScrollView,
    DrawerItem
 } from '@react-navigation/drawer';

 import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


 export function DrawerContent(props){

    const { isDarkTheme, setIsDarkTheme } = React.useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

     return(
         <View style={{flex:1}}>
             <DrawerContentScrollView {... props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        {
                        // AVATAR
                        }
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Gabriel Casafu</Title>
                                <Caption style={styles.caption}>@kcha</Caption>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="home-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={() => {props.navigation.navigate('Profile')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="bookmark-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Bookmarks"
                                onPress={() => {props.navigation.navigate('Bookmark')}}
                            />
                            
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-check-outline" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Notifications"
                                onPress={() => {props.navigation.navigate('Notifications')}}
                            />
                        </Drawer.Section>
                        
                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                    </View>
                </View>
             </DrawerContentScrollView>
             <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Cerrar Sesion"
                    onPress={() => {props.navigation.navigate('Home')}}
                />
             </Drawer.Section>
         </View>
     )
 }

 const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });