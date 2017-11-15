import db from "./configDb"

class DataBootstrap {

    constructor() {
        this.db = db.collection("talks")
    }

    initData() {
        this.insert("Sara DeWitt", "Tres miedos infundados sobre el tiempo que pasan los niños ante la pantalla", "Salón Azul")
        this.insert("David Lee", "¿Por qué los trabajos del futuro no parecerán trabajo?", "Salón Azul")
        this.insert("Amel Karboul", "La crisis mundial de aprendizaje, y qué hacer al respecto", "Salón Azul")
        this.insert("Christiane Amanpour and Chris Anderson", "Cómo buscar la verdad en la era de las noticias falsas", "Salón Verde")
        this.insert("Anna Heringer", "La calidez y la sabiduría de los edificios de barro", "Salón Verde")
    }

    insert(author, title, room) {
        console.log("Inserting " + title)
        this.db.push({
            "author": author,
            "title": title,
            "room": room
        })
    }

}

console.log("Data initialization started")
const dataBootstrap = new DataBootstrap()
dataBootstrap.initData()
console.log("Data initailization executed")