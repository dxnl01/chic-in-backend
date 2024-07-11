const providerService = require("../services/providerService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const provider = await providerService.createProvider({
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
    const provider = await providerService.findProviderByEmail(email);
    if (provider && (await bcrypt.compare(password, provider.password))) {
      const token = jwt.sign({ id: provider.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
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

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await providerService.getAllProviders();
    res.status(200).json(providers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProviderById = async (req, res) => {
  try {
    const provider = await providerService.findProviderById(req.params.id);
    if (provider) {
      res.status(200).json(provider);
    } else {
      res.status(404).json({ error: "Provider not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const updatedProvider = await providerService.findProviderById(
      req.params.id
    );
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
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    const deleted = await providerService.deleteProvider(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Provider not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
