const db = require('../../db-seeder');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    hello({name}) {
      /**
       * log a hellow message' to the Cypress' server logs
       *
       * i.e. the node process, not the test logs
       */
      console.log(`hello ${name}`);

      return null;
    },

    'db:seed': (seed = {todos: []}) => {
      db.seed(seed);

      /**
       * indicate that task ran successfully
       */
      return null;
    },

    'db:snapshot': tableName => {
      return db.snapshot(tableName);
    },
  });
};
