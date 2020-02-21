exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("description", 128);

      tbl.boolean("completed");

      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description", 255).notNullable();
      tbl.text("notes", 255);
      tbl.boolean("completed");
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("description", 255);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
