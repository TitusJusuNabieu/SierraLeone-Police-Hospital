const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Diagnosis = require('../model/Diagnosis')


// creat client record
exports.create = async(req, res) => {

   

      try {

        const diagnosis = {
            Diagnosistype: req.body.Diagnosistype,
            disease: req.body.disease,
            disposalOfCase: req.body.disposalOfCase,
    
          };
          const diag = await Diagnosis.create(diagnosis)
          res.status(200).json({"data":diag})
      } catch (e) {
          res.json({ message:
            e.message || "Some occurred while recording Diagnosis."})
      }

      
  
};
// Retrieve all Diagnosiss from the database.
exports.findAll = async(req, res) => {


    try{
        const diag = await Diagnosis.findAll()
        res.status(200).json({"data":diag})
    }catch(e){
        res.json({ message:
        e.message || "Some occurred while creating the Diagnosis."})
    }
  
};

// Find a single Diagnosis with an id
exports.findOne = async(req, res) => {
    try{
        const id = req.params.pinCode;
        const diag = await Diagnosis.findByPk(id)
        res.status(200).json({"data":diag})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Diagnosis."})
    }
};
// Update a Diagnosiss by the id in the request
exports.update = async(req, res) => {
    try{
        const _id = req.params.id;
       const diag = await Diagnosis.update( req.body,
        { where: { id: _id } })
        res.status(200).json(diag==0?{message:`Diagnosis not found`}:{message:`Diagnosis was updated succesfully`})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the Diagnosis."})
    }
};
// Delete a Diagnosiss with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
         await Diagnosis.destroy({
            where: { id: id }
          })
          res.json({message: "Diagnosis was deleted successfully!"})
    } catch (e) {

        res.json({ message:
            e.message || "Some occurred while creating the Diagnosis."})
        
    }
};


