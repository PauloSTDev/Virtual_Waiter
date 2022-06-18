import db from "../../back-end/firebaseConnect"
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { searchByAddress } from "../google_geocoding_api_service/LocationService"


export const postPizza = (dados) => {
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