'use strict';

var utils = require('../utils/writer.js');
var Machine = require('../service/MachineService');

module.exports.machineId = function machineId(req, res, next, customerId) {
  Machine.machineId(customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.queryMachines = function queryMachines(req, res, next, customer, drainSensorOn, pump5On, pump10On, waterTemp, waterLevel) {
  Machine.queryMachines(customer, drainSensorOn, pump5On, pump10On, waterTemp, waterLevel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
