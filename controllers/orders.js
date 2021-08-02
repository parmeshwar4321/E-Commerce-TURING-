
const knex = require('../database/turingdb')

exports.createOrders = async (req, res) => {

    await knex('orders').insert(req.body)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })
}

exports.getOrdersById = async (req, res) => {
    await knex.select("*")
        .from('orders')
        .where("order_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })
}

exports.getOrdersbyCustomer = async (req, res) => {
    await knex.select("*")
        .from('orders')
        .where("customer_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })
}