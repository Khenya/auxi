const logger = require('../utils/logger');
const { getSubjectService, 
    getSubjectByIdService, 
    postSubjectByIdService,
    putSubjectByIdService, 
    deleteSubjectByIdService } = require("../repositories/subjectRepository");

// get subject
const getSubjectController = async (req, res) => {
    const {params} = req;
    logger.info('getSubjectController - Req', req);
    const {id} = params;
    logger.info('getSubjectController - id', id);
    try {
        const subjects = await getSubjectService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

// get subject id
const getSubjectByIdController = async (req, res) => {
    const {params} = req;
    logger.info('getSubjectByIdController - Req', req);
    const {id} = params;
    logger.info('getSubjectByIdController - id', id);
    try {
        const subject = await getSubjectByIdService(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

// post subject
const postSubjectController = async (req, res) => {
    const {params} = req;
    logger.info('postSubjectController - Req', req);
    const {body} = params;
    logger.info('postSubjectController - Body', body);
    try {
        const subject = await postSubjectByIdService(req.body);
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
    
};

// put subject id
const putSubjectByIdController = async (req, res) => {
    const {params} = req;
    logger.info('putSubjectByIdController - Req', req);
    const {id} = params;
    logger.info('putSubjectByIdController - id', id);
    try {
        const subject = await putSubjectByIdService(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

// delete subject id
const deleteSubjectByIdController = async (req, res) => {
    const {params} = req;
    logger.info('deleteSubjectByIdController - Req', req);
    const {id} = params;
    logger.info('deleteSubjectByIdController - id', id);
    try {
        const subject = await deleteSubjectByIdService(req.params.ids);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }
    
};

module.exports = {
    getSubjectController,
    getSubjectByIdController,
    postSubjectController,
    putSubjectByIdController,
    deleteSubjectByIdController
};