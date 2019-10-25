const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres';

const db = new Sequelize(databaseUrl)

db.sync({force:false})
.then(() => console.log("Database synched"))
.catch(error => console.log("DB Error",error))

module.exports = db 