import db from "./configDb"

export default class TalksService {
    
        constructor() {
            this.talks = []
            this.db = db.collection("talks")
            this.db.on("value", snap => {
                this.talks = []
                snap.forEach(snapTalk => {
                    const newTalk = { id: snapTalk.key }
                    const talk = snapTalk.val()
                    newTalk.author = talk.author
                    newTalk.title = talk.title
                    newTalk.room = talk.room
                    this.talks.push(newTalk)
                })
            })
        }
        
        findAll() {
            return this.talks
        }
    
        filter(value) {
            return this.talks.filter( talk => talk.author.toUpperCase().includes(value.toUpperCase()) || talk.title.toUpperCase().includes(value.toUpperCase()) )
        }

    }