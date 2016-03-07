var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/database.sqlite'
  },
  useNullAsDefault: true
})

var createSql = [
'CREATE TABLE blogpost (',
'id INTERGER PRIMARY KEY ASC,',
'title VARCHAR(255) NOT NULL UNIQUE,',
'post VARCHAR(255) NOT NULL',
');'
].join(' ')



knex.raw(createSql).then(function (resp) {
  console.log("im gonna create the sql")
  return knex.raw(createSql)
}).then(function (resp) { //create catsSQL
  process.exit()
})
