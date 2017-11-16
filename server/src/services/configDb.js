import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD2x4C8zXo13CLMzaxE8cr9T4ZP8LXxHdg",
    authDomain: "conferencia-c6188.firebaseapp.com",
    databaseURL: "https://conferencia-c6188.firebaseio.com",
    projectId: "conferencia-c6188",
    storageBucket: "conferencia-c6188.appspot.com",
    messagingSenderId: "856589092410"
}

const database = firebase.initializeApp(config).database() 

const db = {
    
    collection(collection) {
        return database.ref(collection)
    }
}

export default db
