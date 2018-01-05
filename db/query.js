const db = require('./connection')

getAllMaps = () => db('map')




module.exports = {
    getAllMaps
}