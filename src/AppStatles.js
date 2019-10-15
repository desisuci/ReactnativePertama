import React from 'react';
import {
    View,
    Text
} from 'react-native';

const AppStatles = (props) => ( //es6
    <View>
        <Text> Component Stateles </Text>
        <Text> Nama : {props.nama} </Text>
        <Text> Alamat : {props.alamat} </Text>
        <Text> Telp : {props.telp} </Text>
        <Text> Email : {props.email} </Text>
    </View>
)
export default AppStatles;