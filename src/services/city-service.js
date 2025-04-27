const { CityRepository } = require('../repositories');
const { StatusCodes } = require("http-status-codes")
const cityRepository = new CityRepository();
const AppError = require("../utils/errors/app-error.js")

async function createCity(data) {
    try {
        console.log(data);
        const city = await cityRepository.create(data);
        console.log(city)
        return city;
    } catch (error) {
        if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
            let explaination = [];
            error.errors.forEach(err => {
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new city object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity
}