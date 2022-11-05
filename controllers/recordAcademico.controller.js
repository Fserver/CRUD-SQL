const CONFIGURACION = require('../db/dbconfig');
const SQL = require('mssql');
const RecordAcademico = require('../models/recordAcademico.model');


//CREATE
async function registrarRecordAcademico(RecordAcademico) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let insertRecordAcademico = await pool.request()
            .input('CODIGO', SQL.VarChar, RecordAcademico.CODIGO)
            .input('FECHA', SQL.Date, RecordAcademico.FECHA)
            .input('PERIODO', SQL.TinyInt, RecordAcademico.PERIODO)
            .input('NOTA1', SQL.Decimal, RecordAcademico.NOTA1)
            .input('NOTA2', SQL.Decimal, RecordAcademico.NOTA2)
            .input('COD_ESTUDIANTE', SQL.VarChar, RecordAcademico.COD_ESTUDIANTE)
            .input('COD_DOCENTE', SQL.VarChar, RecordAcademico.COD_DOCENTE)
            .execute('SP_INSERT_RECORD_ACADEMICO', '@CODIGO', '@FECHA', '@PERIODO', '@NOTA1', '@NOTA2', '@COD_ESTUDIANTE', '@COD_DOCENTE')
        return insertRecordAcademico.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//READ ALL
async function obtenerRecordAcademico() {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .execute('SP_READALL_RECORD_ACADEMICO')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//READ BY CODE
async function obtenerRecordAcademicoPorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let respuesta = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_READ_RECORD_ACADEMICO', '@CODIGO')
        return respuesta.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}
//UPDATE
async function actualizarRecordAcademico(RecordAcademico, codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION);
        let updateRecordAcademico = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .input('FECHA', SQL.Date, RecordAcademico.FECHA)
            .input('PERIODO', SQL.TinyInt, RecordAcademico.PERIODO)
            .input('NOTA1', SQL.Decimal, RecordAcademico.NOTA1)
            .input('NOTA2', SQL.Decimal, RecordAcademico.NOTA2)
            .input('COD_ESTUDIANTE', SQL.VarChar, RecordAcademico.COD_ESTUDIANTE)
            .input('COD_DOCENTE', SQL.VarChar, RecordAcademico.COD_DOCENTE)
            .execute('SP_UPDATE_RECORD_ACADEMICO', '@CODIGO', '@FECHA', '@PERIODO', '@NOTA1', '@NOTA2', '@COD_ESTUDIANTE', '@COD_DOCENTE')
        return updateRecordAcademico.recordset;
    }
    catch (error) {
        console.log("Error " + error);
    }
}
//DELETE
async function eliminarRecordAcademicoPorID(codigo) {
    try {
        let pool = await SQL.connect(CONFIGURACION)
        let eliminacion = await pool.request()
            .input('CODIGO', SQL.VarChar, codigo)
            .execute('SP_DELETE_RECORD_ACADEMICO', '@CODIGO')
        return eliminacion.recordset
    } catch (error) {
        console.log("Error " + error);
    }
}

module.exports = {
    obtenerRecordAcademico,
    obtenerRecordAcademicoPorID,
    registrarRecordAcademico,
    actualizarRecordAcademico,
    eliminarRecordAcademicoPorID
}