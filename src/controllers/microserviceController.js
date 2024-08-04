const microserviceService = require("../services/microserviceService");

exports.createMicroservice = async (req, res) => {
  try {
    const microservice = await microserviceService.createMicroservice(req.body);
    res.status(201).json(microservice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMicroserviceById = async (req, res) => {
  try {
    const microservice = await microserviceService.findMicroserviceById(
      req.params.id
    );
    if (microservice) {
      res.status(200).json(microservice);
    } else {
      res.status(404).json({ error: "Microservice not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMicroservice = async (req, res) => {
  try {
    const microservice = await microserviceService.findMicroserviceById(
      req.params.id
    );
    if (microservice) {
      const updatedMicroservice = await microservice.update(req.body);
      res.status(200).json(updatedMicroservice);
    } else {
      res.status(404).json({ error: "Microservice not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMicroservice = async (req, res) => {
  try {
    const microservice = await microserviceService.findMicroserviceById(
      req.params.id
    );
    if (microservice) {
      await microservice.destroy();
      res.status(200).json({ message: "Microservice deleted successfully" });
    } else {
      res.status(404).json({ error: "Microservice not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMicroservices = async (req, res) => {
  try {
    const microservices = await microserviceService.getAllMicroservices();
    res.status(200).json(microservices);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
