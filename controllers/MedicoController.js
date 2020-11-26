const medico = require("../models/MedicoSchema");

class MedicoController{
    async store(req, res){
        var resultFind = await medico.findOne({crm: req.body.crm});
        if (resultFind === null) {
            var result = await medico.create(req.body);
            res.status(201).json(result);
        } else {
            res.status(406).json("CRM já cadastrado");
        }    
    }

    async get(req, res){
        var result = await medico.find({});
        res.status(200).json(result);
    }
    async getOne(req, res){
        var result = await medico.findOne({crm: req.params.crm});
        res.status(200).json(result);
    }
    async update(req, res){
        var result = await medico.updateOne({crm: req.body.crm}, {$set:req.body});
        res.status(200).json(result);
    }
    async delete(req, res){
        var result = await medico.deleteOne({crm: req.params.crm});
        res.status(200).json(result);
    }
}

module.exports = new MedicoController();