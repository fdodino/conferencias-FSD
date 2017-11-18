import {
	version
} from '../../package.json'
import {
	Router
} from 'express'
import {
	TalkService,
	RoomService,
	ScheduleService,
	TalkGridService
} from "../services/talkService"

const talkService = new TalkService()
const roomService = new RoomService()
const scheduleService = new ScheduleService()

const talkGridService = new TalkGridService({
	"talkService": talkService,
	"roomService": roomService,
	"scheduleService": scheduleService
})

function processResultFor(element) {
	const result = {
		"status": "processed",
		"statusOk": element.ok
	}
	if (!element.ok) {
		result.errorsDetected = element.errors
	}
	return result
}

function httpCodeFor(element) {
	return (element.ok) ? 200 : 400
}

export default ({
	config,
	db
}) => {
	let api = Router()

	api.get('/talks', (req, res) => {
		res.json(talkService.findAll())
	})

	api.get('/rooms', (req, res) => {
		res.json(roomService.findAll())
	})

	api.get('/schedules', (req, res) => {
		res.json(scheduleService.findAll())
	})

	api.get('/talkGrid/:searchValue', (req, res) => {
		const searchValue = req.params.searchValue || ""
		res.json(talkGridService.talkGrid(searchValue))
	})

	api.get('/talkGrid', (req, res) => {
		res.json(talkGridService.talkGrid(""))
	})

	api.post('/talks', (req, res) => {
		const processedTalk = talkService.insert(req.body)
		res.json(httpCodeFor(processedTalk), processResultFor(processedTalk))
	})

	api.get('/talks/:searchValue', (req, res) => {
		const searchValue = req.params.searchValue || ""
		res.json(talkService.filter(searchValue))
	})

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			version
		})
	})

	return api
}