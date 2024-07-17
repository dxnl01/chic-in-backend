const serviceService = require("../services/serviceService");
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const sns = new AWS.SNS();

const sendSMS = (phoneNumber, message) => {
  const params = {
    Message: message,
    PhoneNumber: phoneNumber,
  };

  console.log(`Enviando SMS a ${phoneNumber} con mensaje: "${message}"`);

  sns.publish(params, (err, data) => {
    if (err) {
      console.error(err, err.stack);
    } else {
      console.log(`SMS enviado. MessageID: ${data.MessageId}`);
    }
  });
};

exports.requestService = async (req, res) => {
  try {
    const { clientId, providerId, ...rest } = req.body;
    const service = await serviceService.createService({
      ...rest,
      clientId: clientId || null,
      providerId: providerId || null,
      status: "Pending",
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.acceptService = async (req, res) => {
  try {
    const service = await serviceService.findServiceById(req.params.id);
    if (service) {
      await serviceService.updateService(service.id, { status: "accepted" });

      const client = await clientService.findClientById(service.clientId);
      if (client) {
        sendSMS(client.phone, "Tu servicio ha sido aceptado");
      }

      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.rejectService = async (req, res) => {
  try {
    const service = await serviceService.findServiceById(req.params.id);
    if (service) {
      await serviceService.updateService(service.id, { status: "rejected" });

      const client = await clientService.findClientById(service.clientId);
      if (client) {
        sendSMS(client.phone, "Tu servicio ha sido cancelado");
      }

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
    const services = await serviceService.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await serviceService.findServiceById(req.params.id);
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
    const service = await serviceService.updateService(req.params.id, req.body);
    if (service) {
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
    const service = await serviceService.deleteService(req.params.id);
    if (service) {
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
    const services = await serviceService.getServicesByProvider(req.params.id);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByClient = async (req, res) => {
  try {
    const services = await serviceService.getServicesByClient(req.params.id);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCity = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCity(req.params.city);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategory = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCategory(
      req.params.category
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatus = async (req, res) => {
  try {
    const services = await serviceService.getServicesByStatus(
      req.params.status
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByDate = async (req, res) => {
  try {
    const services = await serviceService.getServicesByDate(req.params.date);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByPrice = async (req, res) => {
  try {
    const services = await serviceService.getServicesByPrice(req.params.price);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByPriceRange = async (req, res) => {
  try {
    const services = await serviceService.getServicesByPriceRange(
      req.params.min,
      req.params.max
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByDateRange = async (req, res) => {
  try {
    const services = await serviceService.getServicesByDateRange(
      req.params.start,
      req.params.end
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndCategory = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCityAndCategory(
      req.params.city,
      req.params.category
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndStatus = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCityAndStatus(
      req.params.city,
      req.params.status
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndStatus = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCategoryAndStatus(
      req.params.category,
      req.params.status
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndDate = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCityAndDate(
      req.params.city,
      req.params.date
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndDate = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCategoryAndDate(
      req.params.category,
      req.params.date
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatusAndDate = async (req, res) => {
  try {
    const services = await serviceService.getServicesByStatusAndDate(
      req.params.status,
      req.params.date
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndPrice = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCityAndPrice(
      req.params.city,
      req.params.price
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndPrice = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCategoryAndPrice(
      req.params.category,
      req.params.price
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByStatusAndPrice = async (req, res) => {
  try {
    const services = await serviceService.getServicesByStatusAndPrice(
      req.params.status,
      req.params.price
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCityAndPriceRange = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCityAndPriceRange(
      req.params.city,
      req.params.min,
      req.params.max
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByCategoryAndPriceRange = async (req, res) => {
  try {
    const services = await serviceService.getServicesByCategoryAndPriceRange(
      req.params.category,
      req.params.min,
      req.params.max
    );
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
