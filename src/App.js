import React from 'react';
import {
    View,
    Text
} from 'react-native';
import ProEx from './PropEx';
import AppStateles from './AppStatles'; /*import component dari 
file AppStatles.js dengan nama alias AppStateles cara panggilnya <AppStateles/> */


class App extends React.Component {
    render() {
        console.log('Hello World')
        return (
            <View>
                {/* <ProEx nama="Desi Suci Ramadhani"
                    alamat="Cisauk"
                    telp="089519725626"
                    email="desisuciramadhani.dsr@gmail.com" />
                <Text></Text>
                <ProEx nama="Irawan Dwi C"
                    alamat="Hutan Belantara"
                    telp="087714157289"
                    email="irawangembel@gmail.com" />
                <Text></Text>
                <ProEx nama="Moch. Riza Pranata"
                    alamat="Goa Hiro"
                    telp="089635243829"
                    email="rizajuga@gmail.com" />
                <Text></Text>
                <ProEx nama="Nur De Afni M"
                    alamat="Victor"
                    telp="089637826352"
                    email="nurdeafni@gmail.com" />
                <Text></Text>
                <ProEx nama="A. Rhaeza Rhaditya"
                    alamat="Cisauk"
                    telp="0821117287396"
                    email="rhaezaaa@gmail.com" />
        <Text></Text> */}
                <AppStateles nama="Wahyu Tri Sangaji"
                    alamat="Karawang"
                    telp="08952672468341"
                    email="wahyoetris@gmail.com" />
                <Text></Text>
                <AppStateles nama="Rahmatina Utami"
                    alamat="Karawang"
                    telp="08215785769953"
                    email="rahmatina@gmail.com" />
                <Text></Text>
                <AppStateles nama="Rafasya Alfarezi M"
                    alamat="Alam Sutera"
                    telp="02175791812"
                    email="alfarezi@gmail.com" />
            </View>

        );
    }
}

export default App;