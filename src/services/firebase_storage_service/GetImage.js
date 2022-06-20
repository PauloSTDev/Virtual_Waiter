import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const get = (collectionName, imagem_id) => {
  return new Promise(async (resolve, reject) => {
    const storage = getStorage()
    const reference = ref(storage, "/Images/" +collectionName+"/" + imagem_id)
    try {
      await getDownloadURL(reference)
        .then((response) =>
          resolve(response)
        )
    }
    catch(error){
      //console.log("Deu errado isso ai mano");
      reject(error)
    }
    
  })
}