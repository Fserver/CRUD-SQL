const ASIGNATURA_CONTROLLER = require('./controllers/asignaturas.controller');
const ESTUDIANTE_CONTROLLER = require('./controllers/estudiantes.controller');
const DOCENTE_CONTROLLER = require('./controllers/docentes.controller');
const RECORD_ACADEMICO_CONTROLLER = require('./controllers/recordAcademico.controller');

const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');


const APP = EXPRESS();

APP.use(BODY_PARSER.urlencoded({ extended: true }))
APP.use(BODY_PARSER.json())
APP.use(CORS())

const PORT = process.env.port || 8090;
APP.listen(PORT);
console.log('Corriendo en el puerto: ' + PORT);

APP.use('/api', (request, response, next) => {
    console.log('Hola, Time:', Date());
    next();
});





/** TABLA ASIGNATURAS **/

    //OBTENER TODOS LOS REGISTROS
    APP.route('/api/asignaturas').get((request, response) => {
        ASIGNATURA_CONTROLLER.obtenerAsignaturas().then(result => {
            response.json(result);
        })
    })
    //OBTENER REGISTRO POR CÓDIGO
    APP.route('/api/asignaturas/:id').get((request, response) => {
        ASIGNATURA_CONTROLLER.obtenerAsignaturaPorID(request.params.id).then(result => {
            response.json(result);
        })
    })
    //CREAR UN REGISTRO
    APP.route('/api/asignaturas').post((request, response) => {
        let asignatura = { ...request.body }
        ASIGNATURA_CONTROLLER.registrarAsignaturas(asignatura).then(result => {
            response.status(201).json(result);
        })
    })
    //ACTUALIZAR UN REGISTRO POR CÓDIGO
    APP.route('/api/asignaturas/update/:id').put((request, response) => {
        let asignatura = { ...request.body }
        ASIGNATURA_CONTROLLER.actualizarAsignaturas(asignatura, request.params.id).then(result => {
            response.json(result)
        })
    })
    //ELIMINAR UN REGISTRO POR CÓDIGO
    APP.route('/api/asignaturas/delete/:id').delete((request, response) => {
        ASIGNATURA_CONTROLLER.eliminarAsignaturaPorID(request.params.id).then(result => {
            response.json(result)
        })
    })






/** TABLA ESTUDIANTES **/

    //OBTENER TODOS LOS REGISTROS
    APP.route('/api/estudiantes').get((request, response) => {
        ESTUDIANTE_CONTROLLER.obtenerEstudiantes().then(result => {
            response.json(result);
        })
    })
    //OBTENER REGISTRO POR CÓDIGO
    APP.route('/api/estudiantes/:id').get((request, response) => {
        ESTUDIANTE_CONTROLLER.obtenerEstudiantePorID(request.params.id).then(result => {
            response.json(result);
        })
    })
    //CREAR UN REGISTRO
    APP.route('/api/estudiantes').post((request, response) => {
        let estudiantes = { ...request.body }
        ESTUDIANTE_CONTROLLER.registrarEstudiantes(estudiantes).then(result => {
            response.status(201).json(result);
        })
    })
    //ACTUALIZAR UN REGISTRO POR CÓDIGO
    APP.route('/api/estudiantes/update/:id').put((request, response) => {
        let estudiantes = { ...request.body }
        ESTUDIANTE_CONTROLLER.actualizarEstudiantes(estudiantes, request.params.id).then(result => {
            response.json(result)
        })
    })
    //ELIMINAR UN REGISTRO POR CÓDIGO
    APP.route('/api/estudiantes/delete/:id').delete((request, response) => {
        ESTUDIANTE_CONTROLLER.eliminarEstudiantePorID(request.params.id).then(result => {
            response.json(result)
        })
    })





/** TABLA DOCENTES **/

    //OBTENER TODOS LOS REGISTROS
    APP.route('/api/docentes').get((request, response) => {
        DOCENTE_CONTROLLER.obtenerDocentes().then(result => {
            response.json(result);
        })
    })
    //OBTENER REGISTRO POR CÓDIGO
    APP.route('/api/docentes/:id').get((request, response) => {
        DOCENTE_CONTROLLER.obtenerDocentePorID(request.params.id).then(result => {
            response.json(result);
        })
    })
    //CREAR UN REGISTRO
    APP.route('/api/docentes').post((request, response) => {
        let docentes = { ...request.body }
        DOCENTE_CONTROLLER.registrarDocentes(docentes).then(result => {
            response.status(201).json(result);
        })
    })
    //ACTUALIZAR UN REGISTRO POR CÓDIGO
    APP.route('/api/docentes/update/:id').put((request, response) => {
        let docentes = { ...request.body }
        DOCENTE_CONTROLLER.actualizarDocentes(docentes, request.params.id).then(result => {
            response.json(result)
        })
    })
    //ELIMINAR UN REGISTRO POR CÓDIGO
    APP.route('/api/docentes/delete/:id').delete((request, response) => {
        DOCENTE_CONTROLLER.eliminarDocentePorID(request.params.id).then(result => {
            response.json(result)
        })
    })






/** TABLA RECORD_ACADEMICO **/

    //OBTENER TODOS LOS REGISTROS
    APP.route('/api/record_academico').get((request, response) => {
        RECORD_ACADEMICO_CONTROLLER.obtenerRecordAcademico().then(result => {
            response.json(result);
        })
    })
    //OBTENER REGISTRO POR CÓDIGO
    APP.route('/api/record_academico/:id').get((request, response) => {
        RECORD_ACADEMICO_CONTROLLER.obtenerRecordAcademicoPorID(request.params.id).then(result => {
            response.json(result);
        })
    })
    //CREAR UN REGISTRO
    APP.route('/api/record_academico').post((request, response) => {
        let recordAcademico = { ...request.body }
        RECORD_ACADEMICO_CONTROLLER.registrarRecordAcademico(recordAcademico).then(result => {
            response.status(201).json(result);
        })
    })
    //ACTUALIZAR UN REGISTRO POR CÓDIGO
    APP.route('/api/record_academico/update/:id').put((request, response) => {
        let recordAcademico = { ...request.body }
        RECORD_ACADEMICO_CONTROLLER.actualizarRecordAcademico(recordAcademico, request.params.id).then(result => {
            response.json(result)
            console.log("Aaa "+result);
        })
    })
    //ELIMINAR UN REGISTRO POR CÓDIGO
    APP.route('/api/record_academico/delete/:id').delete((request, response) => {
        RECORD_ACADEMICO_CONTROLLER.eliminarRecordAcademicoPorID(request.params.id).then(result => {
            response.json(result)
        })
    })