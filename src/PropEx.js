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
                <Text></Text>

                <Text>Nama : {this.props.namaRuang} </Text>
                <Text>Rumus Luas : {this.props.luas} </Text>
                <Text>Rumus Keliling : {this.props.keliling} </Text>
            </View>

        );
    }
}

export default PropEx;