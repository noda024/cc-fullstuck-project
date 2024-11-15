const knex = require("../db/knex");

module.exports = {
  async findAll() {
    return knex("match").select("*");
  },

  // async insertUser(name) {
  //   return knex("match").insert({
  //     name: name,
  //     sex: "men",
  //     age: 10,
  //     born: "zoo",
  //     description: `I am ${name}`,
  //     good: [""],
  //     image_path: "test.png",
  //   });
  // },
};
