import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MyTask = ({ task, navigation }) => {
    return (
        <TouchableOpacity style={{ ...styles.MyTask, backgroundColor: task.color }} onPress={() => navigation.navigate("DetailTask", task)} >
            <View style={{ flex: 1 }} >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} numberOfLines={1}>{task.title}</Text>
                <Text style={{ color: "#fff", fontSize: 12, paddingVertical: 10 }} numberOfLines={3}  >{task.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyTask

const styles = StyleSheet.create({
    MyTask: {
        backgroundColor: "#FDA3B8",
        margin: 5,
        height: 110,
        paddingHorizontal: 4,
        paddingVertical: 2,
        elevation: 6,
        borderRadius: 5,
        flex: 1,
        overflow: "hidden"
    }
})
