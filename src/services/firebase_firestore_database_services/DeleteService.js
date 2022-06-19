import db from "../../back-end/firebaseConnect"
import {deleteDoc, doc } from 'firebase/firestore'

export const deleteCollection = (collectionName, key) => {
    return new Promise(async (resolve, reject) => {
        try {
            await deleteDoc(doc(db, collectionName, key))
            resolve()
        } catch (error) {
            console.log(error)
            reject()
        }
    })
}