let csvFilePath = './utils/mockServer.csv'
let csv = require("csvtojson");

let mainData = {}

// read csv file
csv()
    .fromFile(csvFilePath)
    .then(function (jsonArrayObj) {
        mainData = jsonArrayObj
    })

exports.getMachine = (customerId) => mainData.find(entry => entry.CustomerId == customerId)

exports.queryAll = (customer, drainSensorOn, pump5On, pump10On, waterTemp, waterLevel) => {
    let filteredData = mainData

    if (typeof customer !== 'undefined' && customer !== null) {
        filteredData = filteredData
            .filter(machine => machine.CustomerName
                .toLowerCase()
                .includes(customer.toLowerCase()))
    }

    if (typeof drainSensorOn !== 'undefined' && drainSensorOn !== null) {
        filteredData = filteredData.filter(machine => {
            return drainSensorOn ?
                machine.SensorData
                    .split(';')
                    .includes('DrainSensor:on') :
                machine.SensorData
                    .split(';')
                    .includes('DrainSensor:off')
        })
    }

    if (typeof pump5On !== 'undefined' && pump5On !== null) {
        filteredData = filteredData.filter(machine => {
            return pump5On ?
                machine.SensorData
                    .split(';')
                    .includes('Pump5:on') :
                machine.SensorData
                    .split(';')
                    .includes('Pump5:off')
        })
    }

    if (typeof pump10On !== 'undefined' && pump10On !== null) {
        filteredData = filteredData.filter(machine => {
            return pump10On ?
                machine.SensorData
                    .split(';')
                    .includes('Pump10:on') :
                machine.SensorData
                    .split(';')
                    .includes('Pump10:off')
        })
    }

    if (typeof waterTemp !== 'undefined' && waterTemp !== null && Object.keys(waterTemp).length > 0 && waterTemp.constructor === Object) {

        if (Object.keys(waterTemp).length > 1) throw "too many paramaters for water temp"

        let getWaterTemp = (mach) => mach.SensorData
            .split(';')
            .find(entry => entry.includes('WaterTemp:celcius:'))
            .split('WaterTemp:celcius:')[1]

        if ('eq' in waterTemp) {
            filteredData = filteredData
                .filter(machine => getWaterTemp(machine) == waterTemp.eq)
        }

        if ('lt' in waterTemp) {
            filteredData = filteredData
                .filter(machine => getWaterTemp(machine) < waterTemp.lt)
        }

        if ('gt' in waterTemp) {
            filteredData = filteredData
                .filter(machine => getWaterTemp(machine) > waterTemp.gt)
        }

    }

    if (typeof waterLevel !== 'undefined' && waterLevel !== null && Object.keys(waterLevel).length > 0 && waterLevel.constructor === Object) {

        if (Object.keys(waterLevel).length > 1) throw "too many paramaters for water level"

        let getWaterLevel = (mach) => mach.SensorData
            .split(';')
            .find(entry => entry.includes('WaterLevel:ml-'))
            .split('WaterLevel:ml-')[1]

        if ('eq' in waterLevel) {
            filteredData = filteredData
                .filter(machine => getWaterLevel(machine) == waterLevel.eq)
        }

        if ('lt' in waterLevel) {
            filteredData = filteredData
                .filter(machine => getWaterLevel(machine) < waterLevel.lt)
        }

        if ('gt' in waterLevel) {
            filteredData = filteredData
                .filter(machine => getWaterLevel(machine) > waterLevel.gt)
        }

    }

    return filteredData
}