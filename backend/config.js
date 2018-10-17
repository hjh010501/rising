require('dotenv').config();

module.exports = {
    'secret': process.env.SECRETKEY,
    'mongodbUri': 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST
}