const express = require('express')
const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect(
  'mongodb+srv://insom:ismait3310@cluster0.ybsxb7s.mongodb.net/?retryWrites=true&w=majority'
)
// .then(() => {

//   console.log('Успешно соединились с сервером MongoDB')
// })
// .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

const DepartamentSchema = new Schema({
  name: String,
  location: String,
})

const Departament = model('departament', DepartamentSchema)

const EmployeeSchema = new Schema({
  firstnam: String,
  lastname: String,
  departament: { type: Schema.Types.ObjectId, ref: 'departament' },
})

const Employee = model('employee', EmployeeSchema)

app.use('/', async (req, res) => {
  await Departament.remove({})
  await Departament.create({
    name: 'IT Departamen',
    location: 'Building A',
  })
  await Departament.create({
    name: 'Buhgalter',
    location: 'Building A',
  })

  await Employee.remove({})
  await Employee.create({
    firstnam: 'Aslanbek',
    lastname: 'Abubakarov',
    departament: await Departament.findOne({ name: 'IT Departamen' }),
  })
  await Employee.create({
    firstnam: 'Turpal',
    lastname: 'Gataev',
    departament: await Departament.findOne({ name: 'Buhgalter' }),
  })

  res.json({
    // departaments: await Departament.find(),
    // employee: await Employee.find(),
    employeeWithDep: await Employee.find().populate('departament'),
  })
})

app.listen(3000, () => {
  console.log(`http://localhost:${3000}`)
})
