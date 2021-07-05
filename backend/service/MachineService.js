'use strict';
let mock = require('./mockServerService')

/**
 * machine by id
 * get machine by customerId
 *
 * customerId Long ID of machine to return
 * returns Machine
 **/
exports.machineId = function (customerId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = mock.getMachine(customerId);
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * query all machines
 * query all available machines with filters like customer and server status
 *
 * customer String filter based on customer's name (optional)
 * drainSensorOn Boolean filter based on drain sensor status (optional)
 * pump5On Boolean filter based on pump 5 status (optional)
 * pump10On Boolean filter based on pump 10 status (optional)
 * waterTemp Object filter based on water temp value (optional)
 * waterLevel Object filter based on water temp value (optional)
 * returns List
 **/
exports.queryMachines = function (customer, drainSensorOn, pump5On, pump10On, waterTemp, waterLevel) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = mock.queryAll(customer, drainSensorOn, pump5On, pump10On, waterTemp, waterLevel)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

