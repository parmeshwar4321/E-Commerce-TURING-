
const knex = require('../database/turingdb')

exports.getAttributes = async (req, res) => {

    await knex.select('*')
        .from('attribute')
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })
}

exports.getAttributesById = async (req, res) => {
    await knex.select("*")
        .from('attribute')
        .where("attribute_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })

}
exports.getAttributesValueById = async (req, res) => {
    await knex.select("attribute_value_id","value")
        .from("attribute_value")
        .where("attribute_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })

}

exports.getAttributesByProductId = async (req, res) => {
    await knex.select("*")
        .from('attribute')
        .where("product_id", req.params.id)
        .then((data) => {
            console.log(data);
            res.send(data)
        })
        .catch((er) => {
            console.log(er);
        })

}