const CONFIGURACION = require('../db/dbconfig');
const SQL = require('mssql');
const Estudiantes = require('../models/estudiantes.model');


//CREATE
async function registrarEstudiantes(Estudiantes) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let insertEstudiantes = await pool.request()
            .input('CODIGO', SQL.VarChar, Estudiantes.CODIGO)
            .input('NOMBRE', SQL.VarChar, Estudiantes.NOMBRE)
            .input('APELLIDO', SQL.VarChar, Estudiantes.APELLIDO)
            .input('SEMESTRE', SQL.TinyInt, Estudiantes.SEMESTRE)
            .input('CARRERA', SQL.VarChar, Estudiantes.CARRERA)
            .input('COD_ASIGNATURA', SQL.VarChar, Estudiantes.COD_ASIGNATURA)
            .execute('SP_INSERT_ESTUDIANTE', '@CODIGO', '@NOMBRE', '@APELLIDO', '@SEMESTRE', '@CARRERA', '@COD_ASIGNATURA')
        return insertEstudiantes.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//READ ALL
async function obtenerEstudiantes() {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .execute('SP_READALL_ESTUDIANTE')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//READ BY CODE
async function obtenerEstudiantePorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_READ_ESTUDIANTE', '@CODIGO')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//UPDATE
async function actualizarEstudiantes(Estudiantes, codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let updateEstudiantes = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .input('NOMBRE', SQL.VarChar, Estudiantes.NOMBRE)
            .input('APELLIDO', SQL.VarChar, Estudiantes.APELLIDO)
            .input('SEMESTRE', SQL.TinyInt, Estudiantes.SEMESTRE)
            .input('CARRERA', SQL.VarChar, Estudiantes.CARRERA)
            .input('COD_ASIGNATURA', SQL.VarChar, Estudiantes.COD_ASIGNATURA)
            .execute('SP_UPDATE_ESTUDIANTE', '@CODIGO', '@NOMBRE', '@APELLIDO', '@SEMESTRE', '@CARRERA', '@COD_ASIGNATURA')
        return updateEstudiantes.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//DELETE
async function eliminarEstudiantePorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let eliminacion = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_DELETE_ESTUDIANTE', '@CODIGO')
        return eliminacion.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantePorID,
    registrarEstudiantes,
    actualizarEstudiantes,
    eliminarEstudiantePorID
}