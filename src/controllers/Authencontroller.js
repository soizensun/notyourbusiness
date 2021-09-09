import { auth } from '../configs/FirebaseConfig'

export const firebaseRegister = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
}

export const firebaseLogin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}