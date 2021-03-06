const reqResponse = require('../../cors/responseHandler');
const { v4: uuidv4, validate: uuidValidate  } = require('uuid');
const moment = require("moment");
const config = require('config');

module.exports = (modalMap) => {
    const roleTbl = modalMap["role"];

    /*
        API USE : Create and Save a new Role
        INPUTS  : Role Data
        OUTPUT  : Role Saved
    */
    const createRole = async (req, res) => {

        const roleData = {};

        roleData.role_id   = uuidv4();
        roleData.rolename  = req.body.rolename;
        
        /*audit Columns*/
        roleData.createdAt= moment().format('YYYY-MM-DD H:m:s');
        /* Save Role the database */
        roleTbl.create(roleData);
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
        API USE : Find a single Role
        INPUTS  : Role ID
        OUTPUT  : Single Role
    */
    exports.editRole = (req, res) => {
        const id = req.params.id;

        roleTbl.findOne(id)
            .then(data => {
                res.send(data);
            });
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Role User with id=" + id
                });
            });
    }

    return {createRole, editRole}
}