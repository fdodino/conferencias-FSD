import db from "./configDb"
import Talk from "../models/talk"

export class AbstractService {

    constructor() {
        this.elements = []
        this.db = db.collection(this.collectionName())
        this.db.on("value", snap => {
            this.elements = []
            snap.forEach(snapshot => {
                const element = this.createElement(snapshot.val())
                element.id = snapshot.key
                this.elements.push(element)
            })
        })
    }

    createElement(json) {
        return json
    }

    findAll() {
        return this.elements
    }

    insert(elementJSON) {
        const element = new Talk(elementJSON)
        element.validate()
        if (element.ok) {
            this.db.push(element)
        }
        return element
    }

}

export class TalkService extends AbstractService {

    collectionName() {
        return "conference/talks"
    }

    createElement(json) {
        return new Talk(json)
    }

    filter(value) {
        return this.elements.filter(talk => talk.author.toUpperCase().includes(value.toUpperCase()) || talk.title.toUpperCase().includes(value.toUpperCase()))
    }

}

export class RoomService extends AbstractService {

    collectionName() {
        return "conference/rooms"
    }

}

export class ScheduleService extends AbstractService {

    collectionName() {
        return "conference/schedules"
    }

}

export class TalkConferenceService {

    constructor() {
        this.talkService = new TalkService()
    }

    conferenceGrid() {
        console.log(this.talkService.findAll())

    }
}