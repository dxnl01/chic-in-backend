const { Service, Microservice, ServiceMicroservices } = require("../models");

const createService = async (serviceData) => {
  return await Service.create(serviceData);
};

const createMicroservice = async (serviceId, microserviceData) => {
  const [microservice, created] = await Microservice.findOrCreate({
    where: {
      serviceType: microserviceData.serviceType,
      technique: microserviceData.technique,
      serviceId: serviceId, 
    },
    defaults: {
      ...microserviceData,
      quantity: microserviceData.quantity || 1, 
    },
  });

  if (!created) {
    microservice.quantity += microserviceData.quantity || 1;
    await microservice.save();
  }

  return microservice;
};

const addMicroserviceToService = async (serviceId, microserviceId) => {
  return await ServiceMicroservices.create({
    serviceId: serviceId,
    microserviceId: microserviceId,
  });
};

const findServiceById = async (id) => {
  return await Service.findByPk(id, {
    include: [
      {
        model: Microservice,
        through: { attributes: [] },
      },
    ],
  });
};

const updateService = async (id, data) => {
  const service = await Service.findByPk(id);
  if (service) {
    const { microservices, ...serviceData } = data;
    await service.update(serviceData);

    if (microservices && microservices.length > 0) {
      const microservicePromises = microservices.map(
        async (microserviceData) => {
          const [microservice] = await Microservice.findOrCreate({
            where: {
              serviceType: microserviceData.serviceType,
              technique: microserviceData.technique,
            },
            defaults: microserviceData,
          });
          return microservice.id;
        }
      );
      const microserviceIds = await Promise.all(microservicePromises);
      await service.setMicroservices(microserviceIds);
    }

    return service;
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
  return await Service.findAll({
    include: {
      model: Microservice,
      through: { attributes: [] },
    },
  });
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
  createMicroservice,
  addMicroserviceToService,
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
