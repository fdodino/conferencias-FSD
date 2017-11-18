export default class TalksService {

    findAll() {
        return this.filter("")
    }

    filter(value) {
        return fetch("/api/talks/" + value)
    }

    talkGrid(value) {
        if (value !== undefined && value !== "") {
            return fetch("/api/talkGrid/" + value)
        } else {
            return fetch("/api/talkGrid")
        }
    }

}