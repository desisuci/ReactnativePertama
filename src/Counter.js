import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Counter extends React.Component {
    //#1 inisialisasi state
    state = { value: 0 };
    //#2 Method untuk merubah state
    minus = () => {
        let currentValue = this.state.value;
        this.setState({ value: currentValue - 1 })
    }
    //#2 method untuk merubah state
    plus = () => {
        let currentValue = this.state.value;
        this.setState({ value: currentValue + 1 })
    }
    render() {
        //#3 read component state
        let currentValue = this.state.value
        return (
            <View>
                <Text> Nilai State saat ini : {currentValue} </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.plus()}>
                    <Text style={{ color: '#7FFF00' }}>Tambah</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.minus()}>
                    <Text style={{ color: '#FF0000' }}>Kurang</Text>
                </TouchableOpacity>
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

export default Counter;