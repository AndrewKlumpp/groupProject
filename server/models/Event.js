import { Schema, model } from 'mongoose'


const EventSchema = new Schema({
    eventName:{
        type: String,
        required:[true, "Event name is required"],
        minLength:[4, "Event name must be 4 or more characters"],
        maxLength:[50, "Event name must be less than 50 characters"]
    },
    
    eventLocation:{
        type: String,
        required:[true, "Event Location is required"],
        minLength:[4, "Event Location must be 4 or more characters"],
        maxLength:[100, "Event Location must be less than 100 characters"]
    },

    eventDate:{
        type: Date,
        required:[true, "Event date is required"],
        // Make sure it's a valid date
        validate: {
            validator: function(value) {
                return value instanceof Date && !isNaN(value);
            },
            message: "Event date must be a valid date"
        }
    },
    eventDescription:{
        type: String,
        required:[true, "Event description is required"],
        minLength:[10, "Event description must be 10 or more characters"],
        maxLength:[200, "Event description must be less than 200 characters"]
    }
}, { timestamps: true })


const Event = model('Event', EventSchema);
export default Event;