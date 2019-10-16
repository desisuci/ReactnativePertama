import React from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

class Persegi extends React.Component {
    //#1 inisialisasi State
    state = { panjang: 0, lebar: null, tipe: null, luas: null, keliling: null, rumus: null };
    //#2 method untuk merubah state luas
    hitungLuas = () => {
        let panjang = this.state.panjang; //tampung nilai state akhir pada variabel panjang
        let lebar = this.state.lebar; //tampung nilai state akhir pada variabel lebar
        console.log(this.state);

        if (this.state.rumus == 'luas') {
            let luas = parseInt(panjang) * parseInt(lebar);
            /*menghitung luas persegi variabel panjang dan luas harus dikonversikan ke int karena asalnya berupa String*/
            this.setState({ tipe: luas }) //set state luas
        } else if (this.state.rumus == 'keliling') {
            let keliling = 2 * parseInt(panjang) + parseInt(lebar);
            this.setState({ tipe: keliling })
        }
    }
    render() {
        //#3 read componet state
        let tipe = this.state.rumus
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

                <Text> Tipe rumus yang dipilih : {tipe} </Text>
                <Picker
                    selectedValue={this.state.rumus}
                    style={{ height: 100, width: 300 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ rumus: itemValue })
                    }>
                    <Picker.Item label="Pilih Tipe" value="" />
                    <Picker.Item label="Luas" value="luas" />
                    <Picker.Item label="Keliling" value="keliling" />
                </Picker>

                <Button
                    title="Hitung Luas"
                    onPress={() => {
                        this.hitungLuas()
                    }}
                />

                <Text>{this.state.tipe}</Text>
            </View>
        );
    }
}
export default Persegi;