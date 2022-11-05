const config = {
    user: "yo",
    password: "123",
    server: "ONE",
    database: "PROYECTO_COLEGIO",
    options: {
        trustedConnection: true,
        //encrypt: true,
        //enableArithAbort: true,
        trustServerCertificate: true,
        port: 1433
    }
}

module.exports = config