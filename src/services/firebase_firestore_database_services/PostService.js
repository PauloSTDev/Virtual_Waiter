import db from "../../back-end/firebaseConnect"
import { collection, addDoc} from 'firebase/firestore'
import { searchByAddress } from "../google_geocoding_api_service/LocationService"


export const post = (collectionName, dados) => {
    return new Promise(async (resolve, reject) => {
        try {
            let coordenadas = await searchByAddress(dados.endereco)
            let lat = coordenadas.lat
            let lng = coordenadas.lng
            dados.lat = lat
            dados.lng = lng
            const docId = await addDoc(collection(db, collectionName), dados)
            resolve(docId)
        } catch (error) {
            reject(error)
        }
    })
}