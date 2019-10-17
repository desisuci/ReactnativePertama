import { StyleSheet } from 'react-native'; //line 1
const profileCardColor = 'powderblue';
const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bgImage: {
        marginTop: 50,
        alignItems: 'center',
        width: 300,
        height: 400
    },

    cardContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        paddingTop: 50,
        borderRadius: 20,
        alignItems: 'center',
        //backgroundColor: profileCardColor,
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
    },

    cardName: {
        color: 'lavender',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 3
    },

    cardOccupationContainer: {
        borderColor: '#F3AABB',
        borderBottomWidth: 3
    },

    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },

    cardDescription: {
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 55,
        marginBottom: 10
    }
});

export { styles } //line akhir