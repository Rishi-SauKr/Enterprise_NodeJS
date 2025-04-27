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
module.exports = { createAirplane };