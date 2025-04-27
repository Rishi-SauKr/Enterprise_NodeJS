const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
 * POST : /airplanes
 * req-body {modeNumber: 'airbus320', capacity:200}
 */
async function createAirplane(req, res) {
    try {
        console.log(req.body);
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/**
 * GET : /airplanes
 */
async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/**
 * GET : /airplanes/:id
 */
async function getAirplane(req, res) {
    try {
        const id = req.params.id;
        const airplane = await AirplaneService.getAirplane(id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/**
 * DELETE : /airplanes/:id
 * req-body {modeNumber: 'airbus320', capacity:200}
 */
async function destroyAirplane(req, res) {
    try {
        const id = req.params.id;
        const response = await AirplaneService.destroyAirplane(id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function updateAirplane(req, res) {
    try {
        const id = req.params.id;
        const response = await AirplaneService.updateAirplane(id, {
            capacity: req.body.capacity,
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = { createAirplane, getAirplanes, getAirplane, destroyAirplane, updateAirplane };