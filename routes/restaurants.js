import express from 'express';
import Restaurant from "../models/Restaurant.js";
import City from '../models/Cities.js';
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

  restaurantsRouter.post("/cities", async (req, res) =>{
    const {name} = req.body;
    try {   
      const response = await City.create({name});
      res.status(201).json(response);
    } catch(err){
        // const errors = handleErrors(err);        
        res.status(500).json(err)
    }
  })

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

// restaurantsRouter.get("/tags/:tag", async(req, res)=> {
//   try{
//     const {tag} = req.params
//     const response = await Restaurant.find({tags: tag});
//     res.json(response)
//   } catch(err){
//     res.status(500).json(err);
//   }
// })

restaurantsRouter.get("/cities/:id", async(req, res)=> {
    try {
        const {city} = req.params
      const response = await Restaurant.find({city_id: city});
      res.json(response)
    } catch(err){
        res.status(500).json(err);
    }
});


export default restaurantsRouter;