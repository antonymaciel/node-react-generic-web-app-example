module.exports = function define(sequelize, DataTypes) {
  const Section = sequelize.define(
    'Section',
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
      orientation: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.INTEGER,
        notNull: true
      },
      size: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: 'sections',
      timestamps: false,
      underscored: true
    }
  );

  Section.associate = function associate(models) {
    Section.hasMany(models.Element, {
      as: 'elements',
      foreignKey: {
        name: 'sectionId',
        field: 'section_id'
      }
    });
    Section.belongsTo(models.Page, { foreignKey: 'pageId' });
  };

  return Section;
};
