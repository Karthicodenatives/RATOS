const router = require('express').Router();
const {modelMap } = require("../../models");
const RouteConstant = require('../../constant/Routes');
const permissionController = require('./permissionController')(modelMap);



module.exports = (app) => {
    router.route('/').post(permissionController.createPermission);
    router.route('/:id').put(permissionController.editPermission);

  app.use(`${RouteConstant.VERSION+RouteConstant.PERMISSION}`, router);

};