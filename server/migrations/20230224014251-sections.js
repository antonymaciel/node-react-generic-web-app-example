'use strict';

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function () {};

exports.up = function (db, callback) {
  db.createTable(
    'sections',
    {
      id: {
        type: 'uuid',
        primaryKey: true,
        defaultValue: new String('uuid_generate_v4()')
      },
      name: {
        type: 'string',
        notNull: true
      },
      title: 'string',
      page_id: {
        type: 'uuid',
        notNull: true,
        references: {
          model: 'pages',
          key: 'id'
        }
      },
      orientation: 'string',
      position: {
        type: 'int',
        notNull: true
      },
      size: 'int',
      created_at: {
        type: 'datetime',
        allowNull: false,
        defaultValue: new String('now()')
      },
      updated_at: {
        type: 'datetime',
        allowNull: false,
        defaultValue: new String('now()')
      },
      deleted_at: {
        type: 'datetime'
      }
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable('sections', callback);
};

exports._meta = {
  version: 1
};
