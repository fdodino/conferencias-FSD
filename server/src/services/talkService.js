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
        const element = this.createElement(elementJSON)
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

export class TalkGridService {

    constructor(services) {
        this.roomService = services.roomService
        this.scheduleService = services.scheduleService
        this.talkService = services.talkService
    }

    talkGrid(searchValue) {
        const talksMap = this.buildTalksMap(searchValue)
        const rooms = this.roomService.findAll()
        const scheduleDTO = this.scheduleService.findAll().map((schedule) => {
            return new ScheduleDTO(schedule, rooms, talksMap).toJSON()
        })
        return {
            rooms: rooms,
            scheduleDTO: scheduleDTO
        }
    }

    buildTalksMap(searchValue) {
        const result = new Map()
        this.talkService.filter(searchValue).forEach((talk) => {
            const talks = result.get(talk.schedule.from) || new Map()
            talks.set(talk.room.name, talk)
            result.set(talk.schedule.from, talks)
        })
        return result
    }
}

class ScheduleDTO {
    constructor(schedule, rooms, talksMap) {
        this.schedule = schedule
        this.talks = rooms.map( (room) => {
            const scheduleMap = talksMap.get(schedule.from) || new Map() 
            return scheduleMap.get(room.name) 
        }) 
    }

    toJSON() {
        return {
            schedule: this.schedule,
            talks: this.talks
        }
    }

}