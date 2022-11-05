const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Personnel = require('../model/Personnel')


// creat client record
exports.create = async(req, res) => {

   

      try {

        const personnel = {
            pinCode: req.body.pinCode,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            maritalStatus:req.body.maritalStatus,
            currentAddress: req.body.currentAddress,
            permanentAddress: req.body.permanentAddress,
            gender: req.body.gender,
            photo: req.body.photo,
            role: req.body.role,
            active: req.body.active,
            dateOfBirth: req.body.dateOfBirth,
            dateofEnlistment: req.body.dateofEnlistment,
            dateofExit: req.body.dateofExit,
    
          };
          const psnl = await Personnel.create(personnel)
          res.status(200).json({"data":psnl})
      } catch (e) {
          res.json({ message:
            e.message || "Some occurred while recording Personnel."})
      }

      
  
};
// Retrieve all Personnels from the database.
exports.findAll = async(req, res) => {


    try{
        const psnl = await Personnel.findAll()
        res.status(200).json({"data":psnl})
    }catch(e){
        res.json({ message:
        e.message || "Some occurred while creating the Personnel."})
    }
  
};

// Find a single personnel with an id
exports.findOne = async(req, res) => {
    try{
        const pinCode = req.params.pinCode;
        const pnsl = await Personnel.findByPk(pinCode)
        res.status(200).json({"data":psnl})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Personnel."})
    }
};
// Update a Personnels by the id in the request
exports.update = async(req, res) => {
    try{
        const _id = req.params.pinCode;
       const psnl = await Personnel.update( req.body,
        { where: { pinCode: _id } })
        res.status(200).json(psnl==0?{message:`Personnel not found`}:{message:`Personnel was updated succesfully`})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Personnel."})
    }
};
// Delete a Personnels with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const id = req.params.pinCode;
         await Personnel.destroy({
            where: { pinCode: id }
          })
          res.json({message: "Personnel was deleted successfully!"})
    } catch (e) {

        res.json({ message:
            e.message || "Some occurred while creating the Personnel."})
        
    }
};


