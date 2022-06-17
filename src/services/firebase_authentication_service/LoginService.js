import {
    getAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth'

export const login = (email, senha) => {

    return new Promise((resolve, reject) => {
        try {
            const auth = getAuth()

            signInWithEmailAndPassword(auth, email, senha)
                .then((data) => {
                    const user = data.user
                    resolve(user)
                })
                .catch(error => {
                    const errorCode = error.code
                    if (errorCode === "auth/user-not-found")
                        reject("Usuário não encontrado!")
                    else
                        reject("Usuário ou senha inválidos!")

                })
        } catch (error) {
            reject(error)
        }
    })
}