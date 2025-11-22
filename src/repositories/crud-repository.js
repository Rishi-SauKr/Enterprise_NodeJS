const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    console.log(data);
    const response = await this.model.create(data); console.log(response);
    return response;
  }
  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    console.log(response)
    if (!response) {
      throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND)
    }
    return response;
  }
  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND)
    }
    return response;
  }
  async getAll() {
    const response = await this.model.findAll();
    return response;
  }
  async update(id, data)//data -> {col:value, ...}
  {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    // Model.update() does NOT return the updated row.
    // It returns [numberOfRowsUpdated].
    if (response[0] === 0) {
      throw new AppError("Not able to find the resource", StatusCodes.NOT_FOUND)
    }
    return response;
  }
}


module.exports = CrudRepository;