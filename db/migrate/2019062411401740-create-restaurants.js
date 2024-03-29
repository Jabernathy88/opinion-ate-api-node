export function up(schema) {
  return schema.createTable('restaurants', table => {
    table.increments('id');
    table.string('name');
    table.string('address');
    table.timestamps();

    table.index('created_at');
    table.index('updated_at');
  });
}

export function down(schema) {
  return schema.dropTable('restaurants');
}
