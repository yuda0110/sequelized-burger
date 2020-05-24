module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1]
      }
    }
  });

  Customer.associate = function(models) {
    Customer.belongsTo(models.Burger, {
      foreignKey: {
        // name: 'burgerId',
        allowNull: false
      }
    });
  }

  return Customer;
};