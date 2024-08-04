const Microservice = require("../models/microserviceModel");

const createMicroservice = async (data) => {
  return await Microservice.create(data);
};

const findMicroserviceById = async (id) => {
  return await Microservice.findByPk(id);
};

const findMicroservicesByIds = async (ids) => {
  return await Microservice.findAll({
    where: {
      id: ids,
    },
  });
};

const getAllMicroservices = async () => {
  return await Microservice.findAll();
};

module.exports = {
  createMicroservice,
  findMicroserviceById,
  findMicroservicesByIds,
  getAllMicroservices,
};
