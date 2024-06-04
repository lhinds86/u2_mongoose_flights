const db = require('../db')
const { Flight } = require('../models')

db.on('eror', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // Looking for flights via airports name
  const atlanta = await Airport.find({ name: 'Hartsfield-Jackson Atlanta International Airport' })
  const newYork = await Airport.find({ name: 'LaGuardia Airport' })
  const miami = await Airport.find({ name: 'Miami International Airport' })
  const houston = await Airport.find({ name: 'William P. Hobby Airport' })
  
  const flights = [
    {
      airline: 'AUU',
      flight_number: 1122,
      price: 287,
      numberOfSeats: 32,
      departingAirport: newYork[0]._id,
      arrivalAirport: miami[0]._id,
      departure_dateTime: new Date('2024-05-25T08:30:00')
    },
    {
      airline: 'AUU',
      flight_number: 2233,
      price: 260,
      numberOfSeats: 50,
      departingAirport: atlanta[0]._id,
      arrivalAirport: newYork[0]._id,
      departure_dateTime: new Date('2024-05-25T010:30:00')
    },
    {
      airline: 'AUU',
      flight_number: 3344,
      price: 300,
      numberOfSeats: 62,
      departingAirport: houston[0]._id,
      arrivalAirport: atlanta[0]._id,
      departure_dateTime: new Date('2024-06-01T07:30:00')
    },
    {
      airline: 'AUU',
      flight_number: 4455,
      price: 290,
      numberOfSeats: 25,
      departingAirport: houston[0]._id,
      arrivalAirport: miami[0]._id,
      departure_dateTime: new Date('2024-05-25T09:00:00')
    },
    {
      airline: 'AUU',
      flight_number: 5566,
      price: 150,
      numberOfSeats: 10,
      departingAirport: miami[0]._id,
      arrivalAirport: atlanta[0]._id,
      departure_dateTime: new Date('2024-05-26T012:30:00')
    },
    {
      airline: 'AUU',
      flight_number: 6677,
      price: 330,
      numberOfSeats: 53,
      departingAirport: newYork[0]._id,
      arrivalAirport: houston[0]._id,
      departure_dateTime: new Date('2024-05-25T013:00:00') //1PM 
    },
    {
      airline: 'AUU',
      flight_number: 7788,
      price: 140,
      numberOfSeats: 8,
      departingAirport: atlanta[0]._id,
      arrivalAirport: houston[0]._id,
      departure_dateTime: new Date('2024-05-25T07:00:00')
    }
  ]

  await Flight.insertMany(flights)
  console.log('created flights!')
}

const run = async () => {
  await main()
  db.close()
}

run()