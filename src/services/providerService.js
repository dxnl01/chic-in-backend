const Provider = require("../models/providerModel");

const createProvider = async (data) => {
  return await Provider.create(data);
};

const findProviderByEmail = async (email) => {
  return await Provider.findOne({ where: { email } });
};

const findProviderById = async (id) => {
  return await Provider.findByPk(id);
};

const updateProvider = async (id, data) => {
  const provider = await Provider.findByPk(id);
  if (provider) {
    return await provider.update(data);
  }
  return null;
};

const deleteProvider = async (id) => {
  const provider = await Provider.findByPk(id);
  if (provider) {
    await provider.destroy();
    return true;
  }
  return false;
};

const getAllProviders = async () => {
  return await Provider.findAll();
};

module.exports = {
  createProvider,
  findProviderByEmail,
  findProviderById,
  updateProvider,
  deleteProvider,
  getAllProviders,
};
