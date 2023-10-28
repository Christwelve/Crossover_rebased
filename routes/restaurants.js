import express from 'express';
import Restaurant from "../models/Restaurant.js";
const restaurantsRouter = express.Router();

restaurantsRouter.post("/", async (req, res) => {
  const {name, address, city, img} = req.body;
try {   
      const response = await Restaurant.create({name, address, city, img});
      res.status(201).json(response);
    } catch(err){
        // const errors = handleErrors(err);        
        res.status(500).json(err)
    }
  });


restaurantsRouter.get("/", async (req, res) => {
    try {
      const response = await Restaurant.find();
      res.json(response)
    } 
    catch(err){
        res.status(500).json(err)
    }
});

restaurantsRouter.get("/:id", async(req, res)=> {
    try {
        const id = req.params.id
      const response = await Restaurant.findById(id);
      res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});

restaurantsRouter.get("/city/:city", async(req, res)=> {
    try {
        const {city} = req.params
      const response = await Restaurant.find({city: city});
      res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});


export default restaurantsRouter;