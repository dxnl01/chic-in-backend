const clientService = require("../services/clientService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await clientService.createClient({
      ...rest,
      password: hashedPassword,
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const client = await clientService.findClientByEmail(email);
    if (client && (await bcrypt.compare(password, client.password))) {
      const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ client, token });
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

exports.getAllClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const client = await clientService.findClientById(req.params.id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ error: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const updatedClient = await clientService.findClientById(req.params.id);
    if (updatedClient) {
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await updatedClient.update({ ...rest, password: hashedPassword });
      } else {
        await updatedClient.update(rest);
      }
      res.status(200).json(updatedClient);
    } else {
      res.status(404).json({ error: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const deleted = await clientService.deleteClient(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Client not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
