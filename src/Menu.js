import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Persegi from './Persegi';
import PerhitunganPajak from './PerhitunganPajak';

//cara figo

/*class Menu extends React.Component {
    state = { value: null };

    TambahPersegi = () => {
        this.setState({ value: <Persegi /> })
    }

    TambahPajak = () => {
        this.setState({ value: <PerhitunganPajak /> })
    }

    render() {

        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.TambahPersegi()}>
                    <Text style={{ color: '#7FFF00' }}>Data Ruang</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.TambahPajak()}>
                    <Text style={{ color: '#FF0000' }}> Data Perhitungan Pajak</Text>
                </TouchableOpacity>

                {this.state.value}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: 20,
        margin: 4,
    },
});
*/

//cara ka sule

class Menu extends React.Component {
    state = { tipe: null }

    renderElement() {
        if (this.state.tipe == 'ruang') {
            //Return the firstscreen as a child to set in parent View
            return (
                <Persegi />
            );
        } else if (this.state.tipe == 'pajak') {
            return (
                <PerhitunganPajak />
            );
        }
    }
    render() {
        //tempat untuk memasukkan kode javascript
        let type = this.state.tipe;
        return (
            <View>
                <Text> Tipe State yang dipilih : {type} </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({ tipe: 'ruang' })}>
                    <Text style={{ color: '#7FFF00' }}>Data Ruang</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({ tipe: 'pajak' })}>
                    <Text style={{ color: '#7FFF00' }}>Data Pajak</Text>
                </TouchableOpacity>

                {this.renderElement()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: 20,
        margin: 4,
    },
});
export default Menu;