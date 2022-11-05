class RecordAcademico{
    constructor(ID, CODIGO, FECHA, PERIODO, NOTA1, NOTA2, PROMEDIO, COD_ESTUDIANTE, COD_DOCENTE){
        this.ID = ID,
        this.CODIGO = CODIGO,
        this.FECHA = FECHA,
        this.PERIODO = PERIODO,
        this.NOTA1 = NOTA1,
        this.NOTA2 = NOTA2,
        this.PROMEDIO = PROMEDIO,
        this.COD_ESTUDIANTE = COD_ESTUDIANTE,
        this.COD_DOCENTE = COD_DOCENTE
    }
}
module.exports = RecordAcademico