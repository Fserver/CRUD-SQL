const CONFIGURACION = require('../db/dbconfig');
const SQL = require('mssql');
const Docentes = require('../models/docentes.model');


//CREATE
async function registrarDocentes(Docentes) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let insertDocentes = await pool.request()
            .input('CODIGO', SQL.VarChar, Docentes.CODIGO)
            .input('NOMBRE', SQL.VarChar, Docentes.NOMBRE)
            .input('APELLIDO', SQL.VarChar, Docentes.APELLIDO)
            .input('COD_ASIGNATURA', SQL.VarChar, Docentes.COD_ASIGNATURA)
            .execute('SP_INSERT_DOCENTE', '@CODIGO', '@NOMBRE', '@APELLIDO', '@COD_ASIGNATURA')
        return insertDocentes.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//READ ALL
async function obtenerDocentes() {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .execute('SP_READALL_DOCENTE')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//READ BY CODE
async function obtenerDocentePorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_READ_DOCENTE', '@CODIGO')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//UPDATE
async function actualizarDocentes(Docentes, codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let updateDocentes = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .input('NOMBRE', SQL.VarChar, Docentes.NOMBRE)
            .input('APELLIDO', SQL.VarChar, Docentes.APELLIDO)
            .input('COD_ASIGNATURA', SQL.VarChar, Docentes.COD_ASIGNATURA)
            .execute('SP_UPDATE_DOCENTE', '@CODIGO', '@NOMBRE', '@APELLIDO', '@COD_ASIGNATURA')
        return updateDocentes.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//DELETE
async function eliminarDocentePorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let eliminacion = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_DELETE_DOCENTE', '@CODIGO')
        return eliminacion.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}

module.exports = {
    obtenerDocentes,
    obtenerDocentePorID,
    registrarDocentes,
    actualizarDocentes,
    eliminarDocentePorID
}