const reqResponse = require('../../cors/responseHandler');
const { v4: uuidv4, validate: uuidValidate  } = require('uuid');
const moment = require("moment");
const config = require('config');

module.exports = (modalMap) => {
    const userRole = modalMap["userRole"];

    /*
        API USE : Create and Save a new Role User
        INPUTS  : Role User Data
        OUTPUT  : Role User Saved
    */
    const createRoleUser = async (req, res) => {
        /* Validate request */
        if (!req.body.emailId) {
            res.status(400).send({
                message: "Email and Mobile number can not be empty!"
            });
            return;
        }

        const userRoleData = {};

        userRoleData.user_role_id = uuidv4();
        userRoleData.role_id  = uuidv4();
        
        /*audit Columns*/
        userRoleData.createdAt= moment().format('YYYY-MM-DD H:m:s');
        /* Save Role User in the database */
        userRole.create(userRoleData);
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occurred while creating the Role User."
            });
        });
    };

    /*
        API USE : Find a single Role User
        INPUTS  : Role User ID
        OUTPUT  : Single Role User
    */
    exports.editRoleUser = (req, res) => {
        const id = req.params.id;

        userRole.findOne(id)
            .then(data => {
                res.send(data);
            });
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Role User with id=" + id
                });
            });
    }

    return {createRoleUser, editRoleUser}
}