import db from "./configDb"
import Talk from "../models/talk"

export default class TalksService {
    
        constructor() {
            this.talks = []
            this.db = db.collection("talks")
            this.db.on("value", snap => {
                this.talks = []
                snap.forEach(snapTalk => {
                    const talk = new Talk(snapTalk.val())
                    talk.id = snapTalk.key
                    this.talks.push(talk)
                })
            })
        }
        
        findAll() {
            return this.talks
        }
    
        filter(value) {
            return this.talks.filter( talk => talk.author.toUpperCase().includes(value.toUpperCase()) || talk.title.toUpperCase().includes(value.toUpperCase()) )
        }

        insert(talkJSON) {
            const talk = new Talk(talkJSON)
            talk.validate()
            if (talk.ok) {
                this.db.push(talk)
            }
            return talk
        }
    }