//  Set routes for Menu.
const express = require('express');
const router = express.Router();

const MenuItem = require('../HWnode8_models/MenuItem');

// MenuItem routes
// GET method to get menu items
router.get('/menuitem', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("Menu-Items fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Internal Server Error" })
    }
})

// POST endpoint to add new item in menu
router.post('/menuitem', async (req, res) => {
    try {
        const data = req.body;
        const newitem = new MenuItem(data);
        const response = await newitem.save();
        console.log("New-Item Inserted");
        res.status(200).json(response)
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Intenal Server Error" });
    }
})

router.get('/:tastetype', async (req,res)=>{
   try{
       const tastetype = req.params.tastetype;
       if(tastetype == 'sweet' || tastetype == "spicy" || tastetype == "sour"){
           const data = await MenuItem.find({ taste : tastetype});
           console.log("Searched Item Found");
           res.status(200).json(data);
       }else{
           res.status(404).json({Error: "Invalid Taste-Type"});
       }
   }catch(err){
    console.log(err);
    res.status(500).json({Error:"Internal Server Error"});
   }
})

module.exports = router;

