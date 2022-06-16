module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": [process.env.MIGRATIONS_LOCATION],
    "entities": [process.env.ENTITIES_LOCATION],
    "cli": {
        "migrationsDir": process.env.MIGRATIONS_DIR
    }
}
