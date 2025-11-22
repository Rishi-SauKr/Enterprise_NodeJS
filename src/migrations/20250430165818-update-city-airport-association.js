"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Airports.cityId → references → Cities.id
    await queryInterface.addConstraint("Airports", {
      type: "foreign key",
      fields: ["cityId"],
      name: "custom_fkey_column",
      references: {
        table: "Cities",
        field: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "custom_fkey_column");
  },
};
