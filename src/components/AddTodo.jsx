import React,{ useState } from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Alert, Text} from 'react-native'


export const AddTodo = ({onSubmit}) =>{
    const [value, setValue] = useState('')

    const   pressHandler = () => {
        if (value.length > 0) {
            onSubmit(value)
            setValue('')    
        }else{
            Alert.alert('We need more information!')
        }
    }

    return(
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder='add case...'
            autoCorrect={false}
            autoCapitalize='none'
            />
            <TouchableOpacity style={styles.button} title='Add' onPress={pressHandler}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    input:{
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    button:{
        height: 30,
        marginLeft: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        color: '#000',
        width: 50,
        backgroundColor: '#000',
        borderRadius: '30%'
    },
    buttonText:{
        color:'#fff'
    }
})