import db from "./configDb"

class DataBootstrap {

    constructor() {
        this.db = db
    }

    initData() {
        const schedule10to11 = {
            "from": 10,
            "to": 11
        }
        const schedule11to12 = {
            "from": 11,
            "to": 12
        }
        const schedule12to13 = {
            "from": 12,
            "to": 13
        }
        const blueRoom = {
            "name": "Salón Azul",
            "color": "#2196f3"
        }
        const greenRoom = {
            "name": "Salón Verde",
            "color": "#25a84c"
        }
        this.insertRoom(blueRoom)
        this.insertRoom(greenRoom)
        this.insertSchedule(schedule10to11)
        this.insertSchedule(schedule11to12)
        this.insertSchedule(schedule12to13)
        this.insertTalk("Sara DeWitt", "Tres miedos infundados sobre el tiempo que pasan los niños ante la pantalla", blueRoom, schedule10to11)
        this.insertTalk("David Lee", "¿Por qué los trabajos del futuro no parecerán trabajo?", blueRoom, schedule11to12)
        this.insertTalk("Amel Karboul", "La crisis mundial de aprendizaje, y qué hacer al respecto", blueRoom, schedule12to13)
        this.insertTalk("Christiane Amanpour and Chris Anderson", "Cómo buscar la verdad en la era de las noticias falsas", greenRoom, schedule10to11)
        this.insertTalk("Anna Heringer", "La calidez y la sabiduría de los edificios de barro", greenRoom, schedule11to12)
    }

    insertRoom(room) {
        console.log("Inserting Room ", room.name)
        this.db.collection("conference/rooms").push(room)
    }

    insertSchedule(schedule) {
        console.log("Inserting Schedule ", schedule.from, schedule.to )
        this.db.collection("conference/schedules").push(schedule)
    }

    insertTalk(author, title, room, horario) {
        console.log("Inserting Talk ", title)
        this.db.collection("conference/talks").push({
            "author": author,
            "title": title,
            "room": room,
            "horario": horario
        })
    }

}

console.log("Data initialization started")
const dataBootstrap = new DataBootstrap()
dataBootstrap.initData()
console.log("Data initialization executed")