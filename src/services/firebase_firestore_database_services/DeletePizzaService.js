import db from "../../back-end/firebaseConnect"
import {deleteDoc, doc } from 'firebase/firestore'

export const deletePizza = (key) => {
    return new Promise(async (resolve, reject) => {
        try {
            await deleteDoc(doc(db, "pizzas", key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}