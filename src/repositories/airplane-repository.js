const CrudRepository = require('./crud-repository');
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