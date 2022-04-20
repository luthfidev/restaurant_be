const config = {
    postgresql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        driver: "postgres",
    },
}
module.exports = config