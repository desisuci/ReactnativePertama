import React from 'react';
import {
    View,
    Text
} from 'react-native';


class PropEx extends React.Component {
    render() {
        return (
            <View>
                <Text>Contoh Props</Text>
                <Text> Nama : {this.props.nama} </Text>
                <Text> Alamat : {this.props.alamat} </Text>
                <Text> Telp : {this.props.telp} </Text>
                <Text> Email : {this.props.email} </Text>
            </View>

        );
    }
}

export default PropEx;