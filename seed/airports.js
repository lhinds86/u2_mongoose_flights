const db = require('../db')
const { Airport } = require('../models')

db.on('eror', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
      name: 'Hartsfield-Jackson Atlanta International Airport',
      location: 'Atlanta, GA',
      code: 'ATL'
    },
    {
      name: 'LaGuardia Airport',
      location: 'Queens, NY',
      code: 'LGA'
    },
    {
      name: 'Miami International Airport',
      location: 'Miami, FL',
      code: 'MIA'
    },
    {
      name: 'William P. Hobby Airport',
      location: 'Houston, TX',
      code: 'HOU'
    }
  ]

  await Airport.insertMany(airports)
  console.log('created airports!')
}

const run = async () => {
  await main()
  db.close()
}

run()