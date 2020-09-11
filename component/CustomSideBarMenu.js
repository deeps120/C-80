import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class  CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}></DrawerItems>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('welcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>logOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
 