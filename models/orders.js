var knex=require('../database/turingdb')

// knex.schema.createTable("Users", (table) => {
//     table.increments('id').primary();
//     table.string('Name')
//     table.string('email')
//     table.string('password');
// })
//     .then((data) => {
//         console.log("Table Created");
//     })
//     .catch((err) => {
//         console.log("Table Already Exist!!");
//     })