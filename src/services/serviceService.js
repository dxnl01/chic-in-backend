const Service = require("../models/serviceModel");

const createService = async (data) => {
  return await Service.create(data);
};

const findServiceById = async (id) => {
  return await Service.findByPk(id);
};

const updateService = async (id, data) => {
  const service = await Service.findByPk(id);
  if (service) {
    return await service.update(data);
  }
  return null;
};

const deleteService = async (id) => {
  const service = await Service.findByPk(id);
  if (service) {
    await service.destroy();
    return true;
  }
  return false;
};

const getAllServices = async () => {
  return await Service.findAll();
};

const getServicesByProvider = async (providerId) => {
  return await Service.findAll({ where: { providerId } });
};

const getServicesByClient = async (clientId) => {
  return await Service.findAll({ where: { clientId } });
};

const getServicesByCity = async (city) => {
  return await Service.findAll({ where: { city } });
};

const getServicesByCategory = async (category) => {
  return await Service.findAll({ where: { category } });
};

const getServicesByStatus = async (status) => {
  return await Service.findAll({ where: { status } });
};

const getServicesByDate = async (date) => {
  return await Service.findAll({ where: { requestDate: date } });
};

const getServicesByPrice = async (price) => {
  return await Service.findAll({ where: { price } });
};

const getServicesByPriceRange = async (min, max) => {
  return await Service.findAll({
    where: { price: { [Op.between]: [min, max] } },
  });
};

const getServicesByDateRange = async (start, end) => {
  return await Service.findAll({
    where: { requestDate: { [Op.between]: [start, end] } },
  });
};

const getServicesByCityAndCategory = async (city, category) => {
  return await Service.findAll({ where: { city, category } });
};

const getServicesByCityAndStatus = async (city, status) => {
  return await Service.findAll({ where: { city, status } });
};

const getServicesByCategoryAndStatus = async (category, status) => {
  return await Service.findAll({ where: { category, status } });
};

const getServicesByCityAndDate = async (city, date) => {
  return await Service.findAll({ where: { city, requestDate: date } });
};

const getServicesByCategoryAndDate = async (category, date) => {
  return await Service.findAll({ where: { category, requestDate: date } });
};

const getServicesByStatusAndDate = async (status, date) => {
  return await Service.findAll({ where: { status, requestDate: date } });
};

const getServicesByCityAndPrice = async (city, price) => {
  return await Service.findAll({ where: { city, price } });
};

const getServicesByCategoryAndPrice = async (category, price) => {
  return await Service.findAll({ where: { category, price } });
};

const getServicesByStatusAndPrice = async (status, price) => {
  return await Service.findAll({ where: { status, price } });
};

const getServicesByCityAndPriceRange = async (city, min, max) => {
  return await Service.findAll({
    where: { city, price: { [Op.between]: [min, max] } },
  });
};

const getServicesByCategoryAndPriceRange = async (category, min, max) => {
  return await Service.findAll({
    where: { category, price: { [Op.between]: [min, max] } },
  });
};

module.exports = {
  createService,
  findServiceById,
  updateService,
  deleteService,
  getAllServices,
  getServicesByProvider,
  getServicesByClient,
  getServicesByCity,
  getServicesByCategory,
  getServicesByStatus,
  getServicesByDate,
  getServicesByPrice,
  getServicesByPriceRange,
  getServicesByDateRange,
  getServicesByCityAndCategory,
  getServicesByCityAndStatus,
  getServicesByCategoryAndStatus,
  getServicesByCityAndDate,
  getServicesByCategoryAndDate,
  getServicesByStatusAndDate,
  getServicesByCityAndPrice,
  getServicesByCategoryAndPrice,
  getServicesByStatusAndPrice,
  getServicesByCityAndPriceRange,
  getServicesByCategoryAndPriceRange,
};
