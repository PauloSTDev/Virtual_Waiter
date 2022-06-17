import {
    getAuth,
    signOut
} from 'firebase/auth'

export const logoff = () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            resolve()
        }).catch((error) => {
            reject(error)
        });

    })
}