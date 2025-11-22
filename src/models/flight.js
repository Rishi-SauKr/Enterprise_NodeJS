"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        as: "airplaneDetail",
      });
      // aliases (as) are very important in Sequelize, especially when the same model appears multiple times in associations (like Airport).
      // Aliases are used mainly in queries, includes, and associations.
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
        targetKey: 'code',        // IMPORTANT
        as: "departureAirport",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
        targetKey: 'code',        // IMPORTANT
        as: "arrivalAirport",
      });
      // Why targetKey - Because by default Sequelize thinks the referenced key is id.
    }
  }
  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        // total remaining seats
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
