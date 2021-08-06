
const knex = require('../database/turingdb')


//post Order
exports.createOrders = async (req, res) => {
    await knex
        .select('*')
        .from('shopping_cart')
        .where('cart_id', req.body.cart_id)
        .join("product", function () {
            this.on('shopping_cart.product_id', 'product.product_id')
        })
        .then((data) => {
            // console.log(req.body);
            knex("orders").insert({
                // "total_amount":data[0].quantity*data[0].price,
                "created_on": new Date(),
                // "customer_id":tokendata.customer_id,
                "shipping_id": req.body.shipping_id,
                "tax_id": req.body.tax_id

            })
                .then((data) => { console.log(data); })
                .catch((er) => { console.log(er); })
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

exports.getshortdetailsOrdersbyId = async (req, res) => {
    await knex.select("*")
        .from('order_detail')
        .where("product_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })
}