import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProEx from './PropExRuang';

class Ruang extends React.Component {
    render() {
        return (
            <View>
                <ProEx namaRuang="Persegi"
                    luas="Panjang x Lebar"
                    keliling="4 x Sisi" />
                <Text></Text>
                <ProEx namaRuang="Persegi Panjang"
                    luas="2 x (Panjang + Lebar)"
                    keliling="Panjang X Lebar" />
                <Text></Text>
                <ProEx namaRuang="Jajar Genjang"
                    luas="Alas x Tinggi"
                    keliling="AB + BC + CD + AD" />
                <Text></Text>
                <ProEx namaRuang="Segitiga"
                    luas="1/2 x Alas x Tinggi"
                    keliling="AB + BC + AC" />
                <Text></Text>
                <ProEx namaRuang="Lingkaran"
                    luas="π x r² (r= jari - jari | π = 22/7 atau 3.14)"
                    keliling=" π x Diameter" />
            </View>
        );
    }
}

export default Ruang;
