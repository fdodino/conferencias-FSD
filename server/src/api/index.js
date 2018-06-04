import {version} from '../../package.json'
import {Router} from 'express'
import TalkService from "../services/talkService"

const talkService = new TalkService()

export default({config, db}) => {
	let api = Router()

	api.get('/talks', (req, res) => {
		res.json(talkService.findAll())
	})
	api.get('/talks/:searchValue', (req, res) => {
		const searchValue = req.params.searchValue || ""
		res.json(talkService.filter(searchValue))
	})

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({version})
	})

	return api
}
