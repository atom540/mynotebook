
const connnectToMongo= require('./db');

const express = require('express')
connnectToMongo();

const app = express()
const port = 5000
// Available routes
app.use(express.json())

app.get('/', (req, res) => {
  res.send('my name is sumit!')
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})