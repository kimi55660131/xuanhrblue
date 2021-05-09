const Userdb = require('../model/model');


/** Create API */
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty!!!"
        })
        return;
    }
    const user = new Userdb({
        id1:req.body.id1,
        name:req.body.name,
        gender:req.body.gender,
        nric:req.body.nric,
        paymentMethod:req.body.paymentMethod,
        basicSalary:req.body.basicSalary
    })
    user
     .save(user)
     .then(data =>{
         //res.send(data)
         res.redirect('/UserManagement')
     })
     .catch(err=>{
         res.status(500).send({
             message:err.message||"Some error occurred while creating a create operation."
         })
     })
}

/** Retrieve API */
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb
        .findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: 'Not found user with id' + id 
                })
            }
            else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message||"Error retrieving user with id" + id
            })
        })
    }
    else{
        Userdb
        .find()
        .then(user =>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error occured while retrieving all user information."
            })
        })
    }    
}

/** Update API */
exports.update = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Data to update cannot be empty!!!"
        })
        return;
    }
    const id = req.params.id;
    Userdb
    .findByIdAndUpdate(id, req.body,{
        useFindAndModify:false
    })
    .then(data =>{
        if(!data){
            res.status(404).send({
                message: `Cannot Update user with ${id}. Maybe user not found. `
            })
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error update user information."
        })
    })
}

/** Delete API */
exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb
    .findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message: `Cannot Delete with ID ${id}. Maybe ID is wrong. `
            })
        }
        else{
            res.send({
                message: "User was successful deleted !"
            })    
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Could not Delete User with id=" + id
        })
    })
}

