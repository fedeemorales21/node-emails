const express = require('express')
const { join } = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(join(__dirname,'public')))
app.use(require('./routes/index'))


app.listen(app.get('port'), () => console.log('Server on port ',app.get('port')))