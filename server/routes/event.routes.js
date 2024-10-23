import {Router} from 'express'
import { EventController } from '../controllers/event.controller.js'

const router = Router()

router.post('/create', EventController.registerEvent)
router.get('/get/events', EventController.getAllEvents)
router.get('/get/event/:id', EventController.getOneEvent)
router.put('/update/event/:id', EventController.updateEvent)
router.delete('/delete/event/:id', EventController.deleteEvent)



export default router