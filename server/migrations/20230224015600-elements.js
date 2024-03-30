'use strict';

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function () {};

exports.up = function (db, callback) {
  db.createTable(
    'elements',
    {
      id: {
        type: 'uuid',
        primaryKey: true,
        defaultValue: new String('uuid_generate_v4()')
      },
      type: {
        type: 'string',
        notNull: true
      },
      section_id: {
        type: 'uuid',
        notNull: true,
        references: {
          model: 'sections',
          key: 'id'
        }
      },
      value: 'string',
      position: {
        type: 'int',
        notNull: true
      },
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
  db.dropTable('elements', callback);
};

exports._meta = {
  version: 1
};
