const { hash } = require('bcryptjs');

module.exports = function define(sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date_of_birth'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true
    }
  );

  User.beforeCreate(async user => {
    const { password } = user;
    const hashedPassword = await hash(password, 10);
    user.password = hashedPassword;
  });

  return User;
};
