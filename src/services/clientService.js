const Client = require("../models/clientModel");

const createClient = async (data) => {
  return await Client.create(data);
};

const findClientByEmail = async (email) => {
  return await Client.findOne({ where: { email } });
};

const findClientById = async (id) => {
  return await Client.findByPk(id);
};

const updateClient = async (id, data) => {
  const client = await Client.findByPk(id);
  if (client) {
    return await client.update(data);
  }
  return null;
};

const deleteClient = async (id) => {
  const client = await Client.findByPk(id);
  if (client) {
    await client.destroy();
    return true;
  }
  return false;
};

const getAllClients = async () => {
  return await Client.findAll();
};

module.exports = {
  createClient,
  findClientByEmail,
  findClientById,
  updateClient,
  deleteClient,
  getAllClients,
};
