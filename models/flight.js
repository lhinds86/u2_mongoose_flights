const { Schema } = require('mongoose')



const flight = new Schema (
  {
    airline: { type: String, required: true },
    flight_number: { type: Number, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    departingAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
    arrivalAirport: { type: Schema.Types.ObjectId, ref: 'airport_id' },
    departure_dateTime: { type: new Date()} // ("YYYY-mmddTHH:MM:ss")
  },
  {timestamps: true}
)

module.exports = flight