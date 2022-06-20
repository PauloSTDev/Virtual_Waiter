import db from "../../back-end/firebaseConnect"
import {updateDoc, doc} from 'firebase/firestore'
import { searchByAddress } from "../google_geocoding_api_service/LocationService"


export const update = (collectionName, dados, key) => {
    return new Promise(async (resolve, reject) => {
        try {
            let coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            const docRef = doc(db, collectionName, key)
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