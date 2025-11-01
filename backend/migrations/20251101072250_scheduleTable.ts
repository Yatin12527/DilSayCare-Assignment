import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("slots", (table) => {
    table.increments("id").primary();
    table.string("day_of_week").notNullable();
    table.time("start_time").notNullable();
    table.time("end_time").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("slots");
}
