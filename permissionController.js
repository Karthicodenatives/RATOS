const reqResponse = require('../../cors/responseHandler');
const { v4: uuidv4, validate: uuidValidate  } = require('uuid');
const moment = require("moment");
const config = require('config');

module.exports = (modalMap) => {
    const permission = modalMap["permission"]; 

    /*
        API USE : Create and Save a new Permission
        INPUTS  : Permission Data
        OUTPUT  : Permission Saved
    */
    const createPermission = async (req, res) => {

        const permissionData = {};

        permissionData.permission_id   = uuidv4();
        permissionData.permissionCode  = uuidv4();
        permissionData.permissionName  = req.body.permissionName;
        /*audit Columns*/
        permissionData.createdAt= moment().format('YYYY-MM-DD H:m:s');
        /* Save Account User in the database */
        permission.create(permissionData);
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occurred while creating the Permission."
            });
        });
    };

    /*
        API USE : Find a single Permission
        INPUTS  : Permission ID
        OUTPUT  : Single Permission
    */
    exports.editPermission = (req, res) => {
        const id = req.params.id;

        permission.findOne(id)
            .then(data => {
                res.send(data);
            });
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Permission with id=" + id
                });
            });
    }

    return {createPermission, editPermission}
}