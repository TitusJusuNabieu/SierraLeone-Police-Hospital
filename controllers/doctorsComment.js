const Sequelize = require('sequelize');
const Diagnosis = require('../model/diagnose');
const Op = Sequelize.Op;
const DoctorsComment = require('../model/DoctorsComment');
const User = require('../model/user');


// creat client record
exports.create = async(req, res) => {

   let commentAttachment = req.file.path

      try {

        const doctorsComment = {
            commentBody: req.body.commentBody,
            attachment: commentAttachment,
            userId:req.body.userId,
            diagnosisId:req.body.DiagnosisId
          };
          const docmmt = await DoctorsComment.create(doctorsComment)
          res.status(200).json({"data":docmmt})
      } catch (e) {
          res.json({ message:
            e.message || "Some occurred while recording DoctorsComment."})
      }
      
  
};
// Retrieve all DoctorsComments from the database.
exports.findAll = async(req, res) => {


    try{
        const docmmt = await DoctorsComment.findAll({include:[{
            model:Diagnosis,
            as:"Diagnosis",
            required: false,
        },{
            model:User,
            as:"User",
            required: false,
        }]})
        res.status(200).json({"data":docmmt})
    }catch(e){
        res.json({ message:
        e.message || "Some occurred while creating the DoctorsComment."})
    }
  
};

// Find a single DoctorsComment with an id
exports.findOne = async(req, res) => {
    try{
        const id = req.params.pinCode;
        const docmmt = await DoctorsComment.findByPk({id,include:[{
            model:Diagnosis,
            as:"Diagnosis",
            required: false,
        },{
            model:User,
            as:"User",
            required: false,
        }]})
        res.status(200).json({"data":docmmt})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the DoctorsComment."})
    }
};
// Update a DoctorsComments by the id in the request
exports.update = async(req, res) => {

    let commentAttachment = req.headers.host + "/" + req.file.path

    try{
        const _id = req.params.id;

        const doctorsComment = {
            commentBody: req.body.commentBody,
            attachment: commentAttachment,
            userId:req.body.userId,
            diagnosisId:req.body.DiagnosisId
          };

       const docmmt = await DoctorsComment.update( doctorsComment,
        { where: { id: _id } })
        res.status(200).json(docmmt==0?{message:`DoctorsComment not found`}:{message:`DoctorsComment was updated succesfully`})
    }catch(e){
        res.json({ message:
            e.message || "Some occurred while creating the DoctorsComment."})
    }
};
// Delete a DoctorsComments with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const id = req.params.id;
         await DoctorsComment.destroy({
            where: { id: id }
          })
          res.json({message: "DoctorsComment was deleted successfully!"})
    } catch (e) {

        res.json({ message:
            e.message || "Some occurred while creating the DoctorsComment."})
        
    }
};


