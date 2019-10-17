import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bgImage: {
        marginTop: 120,
        alignItems: 'center',
        width: 500,
        height: 900
    },

    judulImageContainer: {
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center',
    },

    judulImage: {
        width: 500, height: 200
    },

    judulLogin: {
        fontWeight: 'bold',
        marginBottom: 40,
        fontSize: 20
    },

    input: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    footerImage: {
        width: 65,
        height: 65,
        marginLeft: 15,
        marginTop: 80
    }
});

export { styles }