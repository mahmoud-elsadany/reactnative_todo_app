import * as SQLite from 'expo-sqlite'
import Toast from "react-native-toast-message"
const db = SQLite.openDatabase('todoApp.db');

export const initializeDatabase = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL,color TEXT NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                    Toast.show({
                        type: "error",
                        text1: err
                    })
                }
            );
        });
    });
    return promise;
};

export const insertTasks = (title, description, color) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO tasks (title, description, color ) VALUES (?, ?, ? );`,
                [title, description, color],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    console.log("err"+err)
                    reject(err);
                }
            );
        });
    });
    return promise;
};
export const fetchTasks = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM tasks',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};
export const deleteTask = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM  tasks where id=?',
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    Toast.show({
                        type: "error",
                        text1: err
                    })
                }
            );
        });
    });
    return promise;
};