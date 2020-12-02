import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Photos', (table: any) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('photo').notNullable();
        table.date('date').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Photos');
}