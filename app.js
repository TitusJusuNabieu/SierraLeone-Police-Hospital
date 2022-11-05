require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dependant = require('./routes/dependant')
const personnel = require('./routes/personnel')
const diagnosis = require('./routes/diagnosis')
const doctorsComment = require('./routes/doctorsComment')
const Auth = require('./routes/auth')
const User = require('./routes/user')
const helmet = require('helmet')
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(helmet())

if (app.get('env') == 'development') {
  app.use(morgan('tiny'))
  console.log('morgan activated')
}

app.use('/api/v1/personnels', personnel)
app.use('/api/v1/dependants', dependant)
app.use('/api/v1/diagnosis', diagnosis)
app.use('/api/v1/doctorsComment', doctorsComment)
app.use('/api/v1/users', User)
app.use('/api/v1/auth', Auth)



const port = process.env.APP_PORT || 4000

app.listen(port, () => {
  console.log(`app is running on ${port}`)
})
