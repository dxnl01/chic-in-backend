const Provider = require("../models/providerModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const provider = await Provider.create({
      ...rest,
      password: hashedPassword,
    });
    res.status(201).json(provider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const provider = await Provider.findOne({ where: { email } });
    if (provider && (await bcrypt.compare(password, provider.password))) {
      const token = jwt.sign({ id: provider.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ provider, token });
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
    const { password, ...rest } = req.body;
    const updatedProvider = await Provider.findByPk(req.params.id);
    if (updatedProvider) {
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await updatedProvider.update({ ...rest, password: hashedPassword });
      } else {
        await updatedProvider.update(rest);
      }
      res.status(200).json(updatedProvider);
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
