const { getSubject, getSubjectById, createSubject, updateSubject, deleteSubject }  = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

// get subjects
const getSubjectService = async () => {
  try {
    logger.info("getSubjectService - Fetching subjects from the database"); 
    const subjects = await getSubject();
    logger.info("getUserService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectService - Error fetching subjects: ", error); 
    throw error;
  }
};

// get subjects id
const getSubjectByIdService = async (id) => {
    try {
      logger.info(`getSubjectById - Fetching subject by id from the database ${id}`); 
      const subject = await getSubjectById(id);
      logger.info("getSubjectById - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`getSubjectById - Error fetching subject by id: ${id} `, error); 
      throw error;
    }
  };

// post subjects
const postSubjectByIdService = async (newSubject) => {
    try {
      logger.info("postSubjectByIdService - Fetching subject from the database"); 
      const subject = await createSubject(newSubject);
      logger.info("postSubjectByIdService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error("postSubjectByIdService - Error fetching subject by id:", error); 
      throw error;
    }
  };

// put subjects id
const putSubjectByIdService = async (id, newSubject) => {
    try {
      logger.info(`putSubjectByIdService - Fetching subject from the database ${id} `); 
      const subject = await updateSubject(id, newSubject);
      logger.info("putSubjectByIdService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`putSubjectByIdService - Error fetching subject by id: ${id} `, error); 
      throw error;
    }
  };
  
// delete subjects id
const deleteSubjectByIdService = async (id) => {
    try {
      logger.info(`deleteSubjectByIdService - Fetching subject from the database ${id} `); 
      const subject = await updateSubject(id);
      logger.info("deleteSubjectByIdService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`deleteSubjectByIdService - Error fetching subject by id: ${id} `, error); 
      throw error;
    }
  };
  
  module.exports = {
    getSubjectService,
    getSubjectByIdService,
    postSubjectByIdService,
    putSubjectByIdService,
    deleteSubjectByIdService
};