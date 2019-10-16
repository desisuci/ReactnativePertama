import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

class PerhitunganPajak extends React.Component {
    state = { bulanan: 0, tahunan: null, persenPajak: null, totalPajak: null };
    hitungPajak = () => {
        let gajiBulanan = this.state.bulanan;
        let gajiTahunan = parseInt(gajiBulanan) * 12;
        this.setState({ tahunan: gajiTahunan })
        let pajak = 0
        let bayarPajak = 0

        if (gajiTahunan <= 50000000) {
            pajak = 0;
            bayarPajak = "Nihil"
        }
        else if ((gajiTahunan >= 50000000) && (gajiTahunan <= 240000000)) {
            pajak = 5;
            bayarPajak = gajiTahunan * pajak / 100;
        }
        else {
            pajak = 15;
            bayarPajak = gajiTahunan * pajak / 100;
        }

        this.setState({ totalPajak: bayarPajak })
        this.setState({ persenPajak: pajak })
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Masukan Gaji Bulanan"
                    onChangeText={(InputGajiBulanan) => this.setState(
                        { bulanan: InputGajiBulanan })}
                    value={this.state.bulanan}
                />

                <Button
                    title="Hitung Pajak"
                    onPress={() => {
                        this.hitungPajak()
                    }}
                />

                <Text>{this.state.tahunan}</Text>
                <Text>{this.state.persenPajak}%</Text>
                <Text>{this.state.totalPajak}</Text>

            </View>
        );
    }
}
export default PerhitunganPajak;