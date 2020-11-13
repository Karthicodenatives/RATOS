const router = require('express').Router();
const {modelMap } = require("../../models");
const RouteConstant = require('../../constant/Routes');
const userRoleController = require('./userRoleController')(modelMap);



module.exports = (app) => {
    router.route('/').post(userRoleController.createRoleUser);
    router.route('/:id').put(userRoleController.editRoleUser);

  app.use(`${RouteConstant.VERSION+RouteConstant.ROLEUSER}`, router);

};