const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

const findSection = async sectionId => {
  return await dbClient.Section.findByPk(sectionId);
};

module.exports = () => async (req, res, next) => {
  try {
    const sectionId = req.params.sectionId || req.internalParams.sectionId;

    const section = await findSection(sectionId);

    if (!section) {
      next(new Error('Section not exists'));
    }

    req.internalParams.section = section;

    next();
  } catch (error) {
    next(error);
  }
};
