module.exports = function(sequelize, DataTypes) {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
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
    Customer.hasOne(models.Burger, {
      onDelete: 'SET NULL'
    });
  }

  return Customer;
};