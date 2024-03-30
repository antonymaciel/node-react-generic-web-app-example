'use strict';

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function () {};

exports.up = function (db, callback) {
  db.createTable(
    'users',
    {
      id: {
        type: 'uuid',
        primaryKey: true,
        defaultValue: new String('uuid_generate_v4()')
      },
      first_name: {
        type: 'string',
        notNull: true
      },
      last_name: {
        type: 'string',
        notNull: true
      },
      email: {
        type: 'string',
        primaryKey: true,
        notNull: true
      },
      date_of_birth: {
        type: 'datetime',
        notNull: true
      },
      password: {
        type: 'string',
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
  db.dropTable('users', callback);
};

exports._meta = {
  version: 1
};
