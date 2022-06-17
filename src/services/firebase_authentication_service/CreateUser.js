import {
    getAuth,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

export const createUser = (email, senha) => {

    return new Promise((resolve, reject) => {
        try {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    resolve("Usuário criado com sucesso!")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    if (errorCode === "auth/invalid-email")
                        reject("E-mail informado incorretamente!")
                    else {
                        reject("Verifique suas credenciais (senha, email) e tente novamente!")
                    }
                });
        } catch (error) {
            reject(error)
        }
    })
}