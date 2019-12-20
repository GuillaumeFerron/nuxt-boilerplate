import axios from 'axios'
import env from './.env.json'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use(cors(
{
  origin: process.env['APP_URL'],
  optionsSuccessStatus: 200
}
))

/**
 * Flatten the query object to a url readable string
 * @param  {Object} obj
 * @return {String}
 */
function toQueryParameters(obj) {
  return '?' + Object.keys(obj).reduce((sum, elem) => `${sum}&${elem}=${obj[elem]}`, '')
}

/**************************/
/****** HELLO WORLD *******/
/**************************/

app.get('/', (req, res) => {
  res.json(`Hello from ${process.env['APP_URL']}`)
})

export default {
  path: `/api/v${process.env['API_VERSION'] || '1'}/`,
  handler: app
}
