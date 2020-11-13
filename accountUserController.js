const reqResponse = require('../../cors/responseHandler');
const { v4: uuidv4, validate: uuidValidate  } = require('uuid');
const moment = require("moment");
const config = require('config');

module.exports = (modalMap) => {
    const accountuser = modalMap["accountuser"]; 

    /*
        API USE : Create and Save a new Account User
        INPUTS  : Account User Data
        OUTPUT  : Account User Saved
    */
    const createAccountUser = async (req, res) => {
        /* Validate request */
        if (!req.body.emailId) {
            res.status(400).send({
                message: "Email and Mobile number can not be empty!"
            });
            return;
        }

        const accountUserData = (typeof req.body.emailId === 'undefined')?JSON.parse(req.body):req.body;

        accountUserData.user_id = uuidv4();
        accountUserData.emailId = emailId;
        /*audit Columns*/
        addOnData.createdAt= moment().format('YYYY-MM-DD H:m:s');
        /* Save Account User in the database */
        accountuser.create(accountUserData);
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:err.message || "Some error occurred while creating the Account User."
            });
        });
    };

    /*
        API USE : Find a single Account User
        INPUTS  : Account User ID
        OUTPUT  : Single Account User
    */
    exports.editAccountUser = (req, res) => {
        const id = req.params.id;

        candidateDtls.findOne(id)
            .then(data => {
                res.send(data);
            });
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Account User with id=" + id
                });
            });
    }

    return {createAccountUser, editAccountUser}
}