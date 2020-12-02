import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('Users', (table: any) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
}

export const down = async (knex: Knex) => {
    return knex.schema.dropTable('Users');
}