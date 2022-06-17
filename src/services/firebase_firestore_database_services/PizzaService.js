import db from "../../back-end/firebaseConnect"
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { searchByAddress } from "../google_geocoding_api_service/LocationService"


export const createPizza = (dados) => {
    return new Promise(async (resolve, reject) => {
        try {
            let coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            const docId = await addDoc(collection(db, "pizzas"), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}


export const getPizza = () => {

    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "pizzas"))
            let registros = []
            querySnapshot.forEach((item) => {
                let data = item.data()
                data.key = item.id
                registros.push(data)
            })
            resolve(registros)
        } catch (error) {
            console.log("Erro:", error)
            reject()
        }
    })
}


export const deletePizza = (key) => {
    console.log("Delete", key)
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