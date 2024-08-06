module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    requestDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finishDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("Active", "Finished", "Declined", "Pending"),
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Clients",
        key: "id",
      },
      allowNull: false,
    },
    providerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Providers",
        key: "id",
      },
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Service;
};
