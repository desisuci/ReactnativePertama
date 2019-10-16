import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FlexBoxRow extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ width: 100, height: 50, backgroundColor: 'powderblue' }}>
                    <Text>Flexbox Row</Text>
                </View>
                <View style={{ width: 200, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 300, height: 50, backgroundColor: 'steelblue' }}>
                    <Text>Width : 300 Height : 50</Text>
                </View>
            </View>
        );
    }
}
export default FlexBoxRow;