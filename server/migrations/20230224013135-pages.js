'use strict';

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function () {};

exports.up = function (db, callback) {
  db.createTable(
    'pages',
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
      type: {
        type: 'string',
        notNull: true
      },
      orientation: 'string',
      order: 'int',
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
  db.dropTable('pages', callback);
};

exports._meta = {
  version: 1
};
