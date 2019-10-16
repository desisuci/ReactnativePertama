import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

class Persegi extends React.Component {
    //#1 inisialisasi State
    state = { panjang: 0, lebar: null, luas: null };
    //#2 method untuk merubah state luas
    hitungLuas = () => {
        let panjang = this.state.panjang; //tampung nilai state akhir pada variabel panjang
        let lebar = this.state.lebar; //tampung nilai state akhir pada variabel lebar
        let luas = parseInt(panjang) * parseInt(lebar); /*menghitung luas persegi variabel panjang dan luas harus di
        konversikan ke int karena asalnya berupa String*/
        this.setState({ luas: luas }) //set state luas
    }
    render() {
        //#3 read componet state
        let currentValue = this.state.currentValue
        return (
            <View>
                <Text> Hitung Luas Persegi Panjang </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Masukkan Panjang"
                    onChangeText={(InputPanjang) => this.setState( //onChange : untuk perubahan | onPress : event saat diklik saja
                        { panjang: InputPanjang })}
                    value={this.state.panjang}
                />

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Masukkan Lebar"
                    onChangeText={(InputLebar) => this.setState(
                        { lebar: InputLebar })}
                    value={this.state.lebar}
                />

                <Button
                    title="Hitung Luas"
                    onPress={() => {
                        this.hitungLuas()
                    }}
                />

                <Text>{this.state.luas}</Text>
            </View>
        );
    }
}
export default Persegi;