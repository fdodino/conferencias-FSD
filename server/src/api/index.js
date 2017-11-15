import { version } from '../../package.json'
import { Router } from 'express'
import TalkService from "../services/talkService"

const talkService = new TalkService()

function processResultFor(element) {
	return {
		"status": "processed",
		"statusOk": element.ok,
		"statusMessage": element.errors 
	}
}

export default ({ config, db }) => {
	let api = Router()

	api.get('/talks', (req, res) => {
		const searchValue = req.params.searchValue || ""
		res.json(talkService.findAll())
	})

	api.post('/talks', (req, res) => {
		const processedTalk = talkService.insert(req.body)
		console.log("Processed talk", processedTalk)
		res.json(processResultFor(processedTalk))
	})

	api.get('/talks/:searchValue', (req, res) => {
		const searchValue = req.params.searchValue || ""
		res.json(talkService.filter(searchValue))
	})

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version })
	})

	return api
}
