const express = require('express');
const router = express.Router();
const ordenProduccionController = require('../controllers/ordenProduccionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Crear una nueva orden de producción
router.post('/', authMiddleware.verifyToken, ordenProduccionController.crearOrdenProduccion);

// Producir una orden de producción
router.post('/:id/producir', authMiddleware.verifyToken, ordenProduccionController.producirOrdenProduccion);    

// Obtener todas las órdenes de producción
router.get('/', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesProduccion);

// Obtener todas las órdenes de producción producidas
router.get('/producidas', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesProducidas);

// obtener todas las órdenes de producción inactivas
router.get('/inactivas', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenesInactivas);

// Obtener una orden de producción por ID
router.get('/:id', authMiddleware.verifyToken, ordenProduccionController.obtenerOrdenProduccionPorId);

// obtener numero de ventas asociadas a una orden de produccion
router.get('/:id/ventas_asociadas', authMiddleware.verifyToken, ordenProduccionController.obtenerVentasPorOrden);

// Actualizar una orden de producción
router.put('/:id', authMiddleware.verifyToken, ordenProduccionController.actualizarOrdenProduccion);

// Mover una orden de producción a la lista de órdenes ya producidas
router.put('/:id/mover', authMiddleware.verifyToken, ordenProduccionController.moverOrdenProduccion);

// Activar/Inactivar una orden de producción
router.patch('/:id/activo', authMiddleware.verifyToken, ordenProduccionController.actualizarEstadoActivoOrdenProduccion);

// Actualizar el estado del proceso de una orden de producción (Cambiado a PUT)
router.put('/:id/estado', authMiddleware.verifyToken, ordenProduccionController.actualizarEstadoProcesoOrdenProduccion);

module.exports = router;
