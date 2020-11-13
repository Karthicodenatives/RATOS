const router = require('express').Router();
const {modelMap } = require("../../models");
const RouteConstant = require('../../constant/Routes');
const accountUserController = require('./accountUserController')(modelMap);



module.exports = (app) => {
    router.route('/').post(accountUserController.createAddOn);
    router.route('/:id').put(accountUserController.editAddOn);

  app.use(`${RouteConstant.VERSION+RouteConstant.ACCUSER}`, router);

};