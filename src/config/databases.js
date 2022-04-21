const config = {
    postgresql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        driver: "postgres",
        dialectOptions: {
            ssl: {
            //   require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
            }
          },
    },
}
module.exports = config