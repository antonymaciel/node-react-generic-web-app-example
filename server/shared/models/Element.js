module.exports = function define(sequelize, DataTypes) {
  const Element = sequelize.define(
    'Element',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        notNull: true
      },
      value: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.INTEGER,
        notNull: true
      }
    },
    {
      tableName: 'elements',
      timestamps: false,
      underscored: true
    }
  );

  Element.associate = function associate(models) {
    Element.belongsTo(models.Section, { foreignKey: 'sectionId' });
  };

  return Element;
};
