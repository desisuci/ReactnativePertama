import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class CounterKucing extends React.Component {
    state = { value: 0 };

    minus = () => {
        let currentValue = this.state.value;
        this.setState({ value: currentValue - 1 })
    }

    plus = () => {
        let currentValue = this.state.value;
        this.setState({ value: currentValue + 1 })
    }
    render() {
        let currentValue = this.state.value
        if (currentValue % 6 == 0) {
            currentValue = "Kucing"
        }
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

export default CounterKucing;