module.exports = function define(sequelize, DataTypes) {
  const Page = sequelize.define(
    'Page',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        notNull: true
      },
      title: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING,
        notNull: true
      },
      orientation: {
        type: DataTypes.STRING
      },
      order: {
        type: DataTypes.INTEGER
      },
      size: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'pages',
      timestamps: false,
      underscored: true
    }
  );

  Page.associate = function associate(models) {
    Page.hasMany(models.Section, {
      as: 'sections',
      foreignKey: {
        name: 'pageId',
        field: 'page_id'
      }
    });
  };

  return Page;
};
