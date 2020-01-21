const express = require('express');
const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true,
});

const router = express.Router();

// Insert CRUD here :)

router.get('/', async (req, res, next) =>{
    try{
        res.json(await db.select("*").from("cars"))
    } catch (err){
        next(err)
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        const car = await db('cars').where('id', req.params.id).first()
        res.json(car)
    } catch (error){
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    try{
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.model,
            transmission: req.body.transmission,
            status_of_title: req.body.status_of_title
        }
        const [id] = await db("cars").insert(payload)
        res.json(await db("cars").where("id", id).first())
    } catch (error){
        next(error)
    }
});

module.exports = router;