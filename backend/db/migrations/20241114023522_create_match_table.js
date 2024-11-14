exports.up = function (knex) {
  return knex.schema.createTable("match", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("sex").notNullable();
    table.integer("age").notNullable();
    table.string("born").notNullable();
    table.string("description").notNullable();
    table.string("image_path").notNullable();
    table.string("good");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("match");
};
