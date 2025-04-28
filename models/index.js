require('dotenv').config()
const { sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

const sequelize = new Sequelize(
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    })

const db = {}
db.sequelize

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) &&
      (file.slice(-3) === '.js')
    })

  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }

})

module.exports = db