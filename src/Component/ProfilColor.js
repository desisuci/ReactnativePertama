import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class ProfilColor extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}
                            source={require('../assets/userId.png')} />
                    </View>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'powderblue';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        paddingTop: 50,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },

    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        paddingTop: 1,
        alignItems: 'center',
        borderColor: 'black',
        width: 88,
        height: 88,
        borderRadius: 60
    },

    cardImage: {
        width: 80, height: 80
    }
});

