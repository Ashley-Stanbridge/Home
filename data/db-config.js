var config = {
  database: {
    dialect: 'splite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

directory: __dirname + '../migrations',
tableName: 'migrations'
}

var Knex = require('knex')
var Knex = Knex(config.database)

module.exports = {
  knex: knex,
  config: config
}