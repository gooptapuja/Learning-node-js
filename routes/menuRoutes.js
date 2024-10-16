const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');


router.post('/',async(req,res)=>{
    try{ 
    const data = req.body //ASSUMING THE REQUEST BODY CONTAINS THE PERSON DATA
    //  create a new person document using the mongoose model
  
    const newMenu = new menu(data);
    const response = await newMenu.save();
    console.log("Data saved in menu card");
    res.status(200).json(response); 
    }catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"}); 
    } 
  })

  
  router.get('/',async(req,res)=>{

    try{
       const data = await menu.find();
       console.log("data fetched for menu card");
       res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })

  router.get('/:taste',async(req,res)=>{
    try{
       const tasteType = req.params.taste; 
       if(tasteType == 'sweet'||tasteType == 'sour'||tasteType == 'spicy')
       {
        const response = await menu.find({taste : tasteType});
        console.log("response fetched from Menu card");
        res.status(200).json(response);
       }
       else{
        res.status(404).json({error:'invalid work type'})
       }
       
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })

  module.exports = router;






  