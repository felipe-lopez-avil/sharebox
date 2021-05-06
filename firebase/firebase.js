import app from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './config'

class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    // Registra a un usuario
    async register(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName: name
        })
    }

    // Inicia sesión del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    // Cierra la sesión del usuario
    async logout() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;