// Update with your config settings.



const config = {
  client:"sqlite3",
  migrations: {directory:'./data/migrations'},
  seeds: {directory: './data/seeds'}
}


module.exports = {

  development: {
    ...config,
    useNullAsDefault: true,
    connection: {
      filename: './data/actual.db3'
    }
  },
  testing:{
    ...config,
    useNullAsDefault: true,
    connection: {
      filename: './data/test.db3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
