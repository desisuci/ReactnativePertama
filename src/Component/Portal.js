import React, { Component } from 'react';
import { TextInput, TouchableOpacity, Button, StyleSheet, View, Image, Text, ImageBackground } from 'react-native';

import { styles } from './stylePortal'

export default class Portal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/backgroundGreen.png')}>
                    <View style={styles.judulImageContainer}>
                        <Image style={styles.judulImage}
                            source={require('../assets/Joox.png')} />
                    </View>
                    <Text style={styles.judulLogin}>Login Apps</Text>
                    <View style={styles.input}>
                        <Text style={{ alignItems: 'center' }}>User Name</Text>
                        <TextInput
                            style={{ height: 50, marginBottom: 10, width: 250, backgroundColor: 'white' }} />

                        <Text style={{ alignItems: 'center' }}>Password</Text>
                        <TextInput
                            style={{ height: 50, marginBottom: 10, width: 250, backgroundColor: 'white' }} />
                        <Button
                            style={{ width: 180, height: 30 }}
                            title="LOGIN" />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image style={styles.footerImage}
                                source={require('../assets/fb.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.footerImage}
                                source={require('../assets/gmail.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image style={styles.footerImage}
                                source={require('../assets/Instagram.png')} />
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}