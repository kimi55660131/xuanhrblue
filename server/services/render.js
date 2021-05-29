const axios = require('axios');

/** Homepage Route */
exports.homeRoutes = (req,res)=>{
    res.render('index');
}

/** FilterArea Route */
exports.filterArea = (req, res) =>{
    res.render('FilterArea');
}

exports.payrollForm = (req, res) =>{
    res.render('PayrollForm');
}

exports.paySlip = (req, res) =>{
    res.render('Payslip');
}

/** UserManagement Route */
exports.userManagement = (req, res) =>{
    axios
    .get(`${PORT}/api/users`) 
    .then(function(response){
        console.log(response)
        res.render('UserManagement',{users:response.data})
    })
    .catch(err => {
        res.send(err)
    })
}

/** UpdateUser Route */
exports.employeeUpdateForm = (req,res)=>{
    axios
    .get(`${PORT}/api/users`,{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("EmployeeUpdateForm",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
}
