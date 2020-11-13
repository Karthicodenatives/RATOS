const router = require('express').Router();
const {modelMap } = require("../../models");
const RouteConstant = require('../../constant/Routes');
const roleController = require('./roleController')(modelMap);



module.exports = (app) => {
    router.route('/').post(roleController.createRole);
    router.route('/:id').put(roleController.editRole);

  app.use(`${RouteConstant.VERSION+RouteConstant.ROLE}`, router);

};