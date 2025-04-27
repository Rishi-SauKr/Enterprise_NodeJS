const { AirplaneRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes")
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-error.js")

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explaination = [];
            error.errors.forEach(err => {
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Cannot fetch data of the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError(`The airplane with ID as ${id} is not present`, StatusCodes.NOT_FOUND);
        throw new AppError(`Cannot fetch data of the airplane with ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError(`The airplane with ID as ${id} to delete is not present`, StatusCodes.NOT_FOUND);
        throw new AppError(`Cannot fetch data of the airplane with ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function updateAirplane(id, data) {
    try {
        const response = await airplaneRepository.update(id, data);
        console.log(response);
        return response;
    } catch (error) {
        if (error.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError(`The airplane with ID as ${id} to updated is not present`, StatusCodes.NOT_FOUND);
        throw new AppError(`Cannot fetch data of the airplane with ${id}`, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = { createAirplane, getAirplanes, getAirplane, destroyAirplane, updateAirplane };