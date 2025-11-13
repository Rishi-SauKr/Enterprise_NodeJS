const CrudRepository = require('./crud-repository');
// When your app starts and you do:
// Sequelize does the following automatically:
// Reads all files in /models
// For each file, calls the exported function with (sequelize, DataTypes)
// Gets the model class (e.g. Airplane)
// Stores it as db.Airplane
// Calls any associate() methods to set up relationships (like hasMany, belongsTo, etc.)
// Exports everything as a single db object which you can destructure like below.
const { Airplane } = require("../models");


class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }

    /*
    async getAirplanesWithSeats() {
        try {
            const response = await this.model.findAll({
                include: {
                    model: this.model.seat,
                    as: 'seats',
                },
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
    */
}
module.exports = AirplaneRepository;