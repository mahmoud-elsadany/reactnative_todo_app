import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import Toast from "react-native-toast-message"
import Icon from "react-native-vector-icons/Ionicons"
import Delete from "react-native-vector-icons/AntDesign"
import { deleteTask } from '../db/db'

const DetailTask = ({ route, navigation }) => {
    const task = route.params
    const deletetaskHandler = async () => {
        const taskResult = await deleteTask(task.id)
        if (taskResult.rowsAffected > 0) {
            Toast.show({
                type: "success",
                text1: "task has been deleted"
            })
            setTimeout(() => {

                navigation.goBack()
            }, 2000);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <View style={styles.iconContainer}>
                        <Icon name='arrow-back' size={24} color={"#fff"} />
                    </View>
                </Pressable>
                <Pressable onPress={deletetaskHandler}>
                    <View style={{ ...styles.iconContainer, backgroundColor: "#fff" }}>
                        <Delete name='delete' size={24} color={"red"} />
                    </View>
                </Pressable>
            </View>
            <View style={{ marginTop: 20, }}>
                <View  >
                    <Text style={{  fontSize: 12 }}>task Title</Text>
                    <Text style={{ fontSize: 20 }}>{task.title}</Text>
                </View>
                <View style={{ marginVertical: 20 }} >
                    <Text style={{  fontSize: 12 }}>task Description</Text>
                    <Text style={{ fontSize: 16 }}>{task.description}</Text>
                </View>
                <View  >
                    <Text style={{  fontSize: 12 }}>task Background Color</Text>
                    <View style={{ ...styles.taskBackground, backgroundColor: task.color }} />

                </View>
            </View>
            <Toast />
        </View>
    )
}

export default DetailTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    iconContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        overflow: "hidden"
    },

    taskBackground: {
        backgroundColor: "#FDA3B8",

        height: 120,

        elevation: 6,
        borderRadius: 5,

        overflow: "hidden"

    }
})
