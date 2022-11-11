const Sequelize = require('sequelize');
const Dependant = require('../model/dependant');
const Op = Sequelize.Op;
const Diagnose = require('../model/Diagnose');
const DoctorsComment = require('../model/DoctorsComment');


// creat client record
exports.create = async(req, res) => {

   

      try {

        const diagnose = {
            Diagnosetype: req.body.Diagnosetype,
            disease: req.body.disease,
            disposalOfCase: req.body.disposalOfCase,
            dependantId:req.body.DependantId,
            personnelPinCode:req.body.PersonnelPinCode
    
          };
          const diag = await Diagnose.create(diagnose)
          res.status(200).json({"data":diag})
      } catch (e) {
          res.json({ message:
            e.message || "Some occurred while recording Diagnose."})
      }

      
  
};
// Retrieve all Diagnoses from the database.
exports.findAll = async(req, res) => {


    try{
        const diag = await Diagnose.findAll({include:[{
            model:DoctorsComment,
            as:"DoctorsComment",
            required: false,
        },
    {
        model:Dependant,
        required: false,
    }]})
        res.status(200).json({"data":diag})
    }catch(e){
        res.json({ message:
        e.message || "Some occurred while creating the Diagnose."})
    }
  
};

// Find a single Diagnose with an id
exports.findOne = async(req, res) => {
    try{
        const id = req.params.pinCode;
        const diag = await Diagnose.findByPk({id,
            include:[{
                model:DoctorsComment,
                required: false,
            },
        {
            model:Dependant,
            as:"DoctorsComment",
            required: false,
        }]})
        res.status(200).json({"data":diag})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Diagnose."})
    }
};
// Update a Diagnoses by the id in the request
exports.update = async(req, res) => {
    try{
        const _id = req.params.id;
       const diag = await Diagnose.update( req.body,
        { where: { id: _id } })
        res.status(200).json(diag==0?{message:`Diagnose not found`}:{message:`Diagnose was updated succesfully`})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Diagnose."})
    }
};
// Delete a Diagnoses with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
         await Diagnose.destroy({
            where: { id: id },
          
          })
          res.json({message: "Diagnose was deleted successfully!"})
    } catch (e) {

        res.json({ message:
            e.message || "Some occurred while creating the Diagnose."})
        
    }
};


