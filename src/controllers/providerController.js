const Provider = require("../models/providerModel");

exports.signup = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).json(provider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const provider = await Provider.findOne({ where: { email, password } });
    if (provider) {
      res.status(200).json(provider);
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProviders = async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProvider = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (provider) {
      res.status(200).json(provider);
    } else {
      res.status(404).json({ error: "Provider not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (provider) {
      await provider.update(req.body);
      res.status(200).json(provider);
    } else {
      res.status(404).json({ error: "Provider not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (provider) {
      await provider.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Provider not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
