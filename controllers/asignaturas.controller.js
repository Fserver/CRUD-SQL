const CONFIGURACION = require('../db/dbconfig');
const SQL = require('mssql');
const Asignaturas = require('../models/asignaturas.model');

//CREATE
async function registrarAsignaturas(Asignaturas) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let insertAsignaturas = await pool.request()
            .input('CODIGO', SQL.VarChar, Asignaturas.CODIGO)
            .input('NOMBRE', SQL.VarChar, Asignaturas.NOMBRE)
            .input('CREDITOS', SQL.TinyInt, Asignaturas.CREDITOS)
            .execute('SP_INSERT_ASIGNATURA', '@CODIGO', '@NOMBRE', '@CREDITOS')
        //.query("INSERT INTO ASIGNATURAS (CODIGO, NOMBRE, CREDITOS) VALUES (@CODIGO, @NOMBRE, @CREDITOS)")
        return insertAsignaturas.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//READ ALL
async function obtenerAsignaturas() {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .execute('SP_READALL_ASIGNATURA')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//READ BY CODE
async function obtenerAsignaturaPorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_READ_ASIGNATURA', '@CODIGO')
        //.query("SELECT * FROM ASIGNATURAS WHERE CODIGO = @CODIGO")
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//UPDATE
async function actualizarAsignaturas(Asignaturas, codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let updateAsignaturas = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .input('NOMBRE', SQL.VarChar, Asignaturas.NOMBRE)
            .input('CREDITOS', SQL.TinyInt, Asignaturas.CREDITOS)
            .execute('SP_UPDATE_ASIGNATURA', '@CODIGO', '@NOMBRE', '@CREDITOS')
        //.query("UPDATE ASIGNATURAS SET NOMBRE = @NOMBRE, CREDITOS = @CREDITOS WHERE CODIGO = @CODIGO")
        return updateAsignaturas.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//DELETE
async function eliminarAsignaturaPorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let eliminacion = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_DELETE_ASIGNATURA', '@CODIGO')
            //.query("DELETE FROM ASIGNATURAS WHERE CODIGO = @CODIGO")
        return eliminacion.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}

module.exports = {
    obtenerAsignaturas,
    obtenerAsignaturaPorID,
    registrarAsignaturas,
    actualizarAsignaturas,
    eliminarAsignaturaPorID
}