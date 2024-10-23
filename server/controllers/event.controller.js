import User from '../models/Event.js'

export const EventController = {

    // create event
    registerEvent: async (req, res) => {
        try{
            // create a new event with form data 
            const newEvent = await Event.create(req.body)
            res.status(201).json(newEvent)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    // read all
    getAllEvents: async (req, res) =>{
        try{
            const getAllEvents = await Event.find()
            res.status(200).json(getAllEvents)
        }
        catch(err){
            return res.status(500).json(err)
        }
    },

    // get one

    getOneEvent: async (req, res) =>{
        const id = req.params.id
        try{
            const getOneEvent = await Event.findById(id)
            res.status(200).json(getOneEvent)
        }
        catch(err){
            return res.status(500).json(err)
        }
    },

    // update
    updateEvent: async (req, res) =>{
        const id = req.params.id
        const options = { new:true,
            runValidators:true}
        try{
            const updateEvent = await Event.findByIdAndUpdate(id, req.body, options)
            res.status(201).json(updateEvent)
        }
        catch(err){
            return res.status(500).json(err)
        }
    },

    // delete
    deleteEvent: async (req, res) =>{
        const id = req.params.id
        try{
            await Event.findByIdAndDelete(id)
            return res.status(204).send()
        }
        catch(err){
            return res.status(500).json(err)
        }
    }


}