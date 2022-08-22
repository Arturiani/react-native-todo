import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native'


export const Todo = ({todo, onRemove}) =>{
    const longPressHandler = () => onRemove(todo.id)
    


    return (
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onLongPress={longPressHandler}>
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo:{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
    },
    container:{
        paddingHorizontal: 10,
    }
})