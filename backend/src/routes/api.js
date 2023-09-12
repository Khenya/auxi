const express = require('express');
const router = express.Router();
const {getSubjectController,
     getSubjectByIdController,
     postSubjectController,
     putSubjectByIdController,
     deleteSubjectByIdController} = require('../controllers/subjectController');

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtener una lista de todas las materias
 *     responses:
 *       200:
 *         description: Lista de materias obtenida exitosamente
 */

const SUBJECT_ROUTE = 'subjects';

// Get /subjects
router.get(SUBJECT_ROUTE, getSubjectController);

// Get /subjects/{id}:
router.get(`${SUBJECT_ROUTE}/:id`, getSubjectByIdController);

// Post /subjects
router.post(SUBJECT_ROUTE, postSubjectController);

// Put /subjects/{id}
router.put(`${SUBJECT_ROUTE}/:id`, putSubjectByIdController);

// Delete api/subjects/{id}
router.delete(`${SUBJECT_ROUTE}:id`, deleteSubjectByIdController);

module.exports = router;
