export default class Talk {

    constructor(talkJSON) {
        this.title = ""
        this.author = ""
        this.room = ""
        this.errors = []
        if (talkJSON !== undefined) {
            this.fromJSON(talkJSON)
        }
    }

    validate() {
        if (this.title == "") {
            this.errors.push("Debe ingresar título")
        }
        if (this.author == "") {
            this.errors.push("Debe ingresar autor")
        }
        if (this.room == "") {
            this.errors.push("Debe ingresar sala")
        }
    }

    get ok() {
        return this.errors.length == 0
    }

    fromJSON(talkJSON) {
        this.author = talkJSON.author
        this.title = talkJSON.title
        this.room = talkJSON.room
    }
} 