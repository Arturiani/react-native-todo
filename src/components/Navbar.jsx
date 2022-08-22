import {View, Text, StyleSheet} from 'react-native'

export const Navbar = ({title}) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}> {title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#000',
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    text: {
        fontSize: 30,
        color: '#fff',
    },
})