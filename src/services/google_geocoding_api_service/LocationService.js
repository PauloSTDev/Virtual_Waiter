import Geocoder from "react-native-geocoding";


Geocoder.init("AIzaSyANxwzTi4Ij0gFF3LO7zNIDaymDVM_M2SM")

export const searchByAddress = (endereco) => {
    return new Promise((resolve, reject) => {

        Geocoder.from(endereco)
        .then( result => {
            var location = result.results[0].geometry.location //Devolve lat e lng
            console.log(location);
            resolve(location)

        })
        .catch(error=> {
            console.log(error)
            reject(error)
        })


    })
}