const { Op } = require("sequelize");
const Service = require("../models/serviceModel");

exports.requestService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.acceptService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.body.id);
    if (service) {
      await service.update({ status: "accepted" });
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      await service.update(req.body);
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      await service.destroy();
      res.status(200).json({ message: "Service deleted successfully" });
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByProvider = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { providerId: req.params.id },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByClient = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { clientId: req.params.id },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCity = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { city: req.params.city },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategory = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { category: req.params.category },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatus = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { status: req.params.status },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByDate = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { requestDate: req.params.date },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByPrice = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { price: req.params.price },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByPriceRange = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { price: { [Op.between]: [req.params.min, req.params.max] } },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByDateRange = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: {
        requestDate: { [Op.between]: [req.params.start, req.params.end] },
      },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndCategory = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { city: req.params.city, category: req.params.category },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndStatus = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { city: req.params.city, status: req.params.status },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndStatus = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { category: req.params.category, status: req.params.status },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndDate = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { city: req.params.city, requestDate: req.params.date },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndDate = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { category: req.params.category, requestDate: req.params.date },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatusAndDate = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { status: req.params.status, requestDate: req.params.date },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndPrice = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { city: req.params.city, price: req.params.price },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndPrice = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { category: req.params.category, price: req.params.price },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatusAndPrice = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: { status: req.params.status, price: req.params.price },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndPriceRange = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: {
        city: req.params.city,
        price: { [Op.between]: [req.params.min, req.params.max] },
      },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndPriceRange = async (req, res) => {
  try {
    const services = await Service.findAll({
      where: {
        category: req.params.category,
        price: { [Op.between]: [req.params.min, req.params.max] },
      },
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
