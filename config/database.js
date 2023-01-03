module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cegi7jqrrk0fhn7cp2dg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'music_store'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '3Qt6Zgs3tvsXpPatq11AzbfYGRkIWjar'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
