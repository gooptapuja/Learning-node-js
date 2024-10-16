const express = require('express')
const router = express.Router();
const Person = require('./../models/person');

router.post('/',async(req,res)=>{
    try{ 
    const data = req.body //ASSUMING THE REQUEST BODY CONTAINS THE PERSON DATA
    //  create a new person document using the mongoose model 
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
    }catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"});   
    }   
  })

  router.get('/',async(req,res)=>{
    try{
       const data = await Person.find();
       console.log("data fetched");
       res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })

  router.get('/:workType',async(req,res)=>{
    try{
       const workType = req.params.workType; 
       if(workType == 'cheif'||workType == 'employee'||workType == 'waiter'||workType == 'Master')
       {
        const response = await Person.find({work : workType});
        console.log("response fetched");
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

  router.put('/:person_id',async(req,res)=>{
    try{
      const personId = req.params.person_id;
      const updatePersonResponse = req.body;
      console.log("person 1");
      
      const personResponse = await Person.findByIdAndUpdate(personId,updatePersonResponse,{
      new:true, //return the updated document
      runValidators:true,//run the mongoose validation
      })
      if(!personResponse){
        return res.status(404).json({error:"person data not found"});
      }
      console.log("person data updated");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{
       const personIdDelete = req.params.id;
       const response = await Person.findByIdAndDelete(personIdDelete);
       if(!response){
        return res.status(404).json({error:"person data not found"});
      }cmd
      console.log("Person data deleted");
      res.status(404).json({message:"person deleted successfully"});
      

    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});

    }

  })
  // comments
  module.exports = router;

   
  


