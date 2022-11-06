const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Dependant = require('../model/Dependant')


// creat client record
exports.create = async(req, res) => {

   

      try {

        const dependant = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phone,
            currentAddress: req.body.currentAddress,
            permanentAddress: req.body.permanentAddress,
            gender: req.body.gender,
            photo: req.body.photo,
            relationship: req.body.relationship,
            documentOfProof: req.body.documentOfProof,
            dateOfBirth: req.body.dateOfBirth,
            dateofExit: req.body.dateofExit,
            personnelPinCode:req.body.PersonnelPinCode
    
          };
          const dpndt = await Dependant.create(dependant)
          res.status(200).json({"data":dpndt})
      } catch (e) {
          res.json({ message:
            e.message || "Some occurred while recording Dependant."})
      }

      
  
};
// Retrieve all Dependants from the database.
exports.findAll = async(req, res) => {


    try{
        const dpndt = await Dependant.findAll()
        res.status(200).json({"data":dpndt})
    }catch(e){
        res.json({ message:
        e.message || "Some occurred while creating the Dependant."})
    }
  
};

// Find a single Dependant with an id
exports.findOne = async(req, res) => {
    try{
        const id = req.params.pinCode;
        const dpndt = await Dependant.findByPk(id)
        res.status(200).json({"data":dpndt})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Dependant."})
    }
};
// Update a Dependants by the id in the request
exports.update = async(req, res) => {
    try{
        const _id = req.params.id;
       const dpndt = await Dependant.update( req.body,
        { where: { id: _id } })
        res.status(200).json(dpndt==0?{message:`Dependant not found`}:{message:`Dependant was updated succesfully`})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Dependant."})
    }
};
// Delete a Dependants with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
         await Dependant.destroy({
            where: { id: id }
          })
          res.json({message: "Dependant was deleted successfully!"})
    } catch (e) {

        res.json({ message:
            e.message || "Some occurred while creating the Dependant."})
        
    }
};


