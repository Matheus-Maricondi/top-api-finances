import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("finances", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.integer("valor").notNullable();
    table.string("descricao");
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("created").defaultTo(knex.fn.now());
    table.timestamp("updated").defaultTo(knex.fn.now());
    table.timestamp("deleted");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("finances");
}

