export default class TalksService {

    findAll() {
        return this.filter("")
    }

    filter(value) {
        //return fetch("/api/talks/" + value)
        // Forcing a 404 error
        return fetch("/api/talks/" + value)
    }

}