import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD2x4C8zXo13CLMzaxE8cr9T4ZP8LXxHdg",
    authDomain: "conferencia-c6188.firebaseapp.com",
    databaseURL: "https://conferencia-c6188.firebaseio.com",
    projectId: "conferencia-c6188",
    storageBucket: "conferencia-c6188.appspot.com",
    messagingSenderId: "856589092410"
}

const db = {
    
    database() {
        return firebase.initializeApp(config).database()
    },

    collection(collection) {
        return this.database().ref(collection)
    }
}

export default db
