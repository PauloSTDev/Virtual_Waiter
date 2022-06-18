import db from "../../back-end/firebaseConnect"
import {updateDoc, doc} from 'firebase/firestore'


export const updatePizza = (dados, key) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, "pizzas", key)
            const docId = await updateDoc(docRef, dados)
            console.log("Deu certo");
            resolve(docId)
        } catch (error) {
            console.log("Deu Errado");
            console.log(error);
            reject(error)
        }
    })
}