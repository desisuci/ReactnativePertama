import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

import { styles } from './styleProfil'

export default class ProfilColor extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/background.png')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage}
                                source={require('../assets/userFemale.png')} />
                        </View>
                        <Text style={styles.cardName}>Desi Suci Ramadhani</Text>
                        <View style={styles.cardOccupationContainer}>
                            <Text style={styles.cardOccupation}>
                                React Native Developer</Text>
                        </View>
                        <View>
                            <Text style={styles.cardDescription}>
                                Desi is a really great JavaScript developer.
                                She loves using JS to build React Native applications
                            for IOS and Android.</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

