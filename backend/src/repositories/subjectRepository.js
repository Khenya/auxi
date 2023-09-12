const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const db = knex(pgConnection.development);
const logger = require("../utils/logger")

// get subjects
const getSubject = async () => {
  try {
    const subject = await db("subjects").select("*");
    logger.info('getSubject response ', subject);
    const subjectJson = users.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor
    }));
    logger.info('subject JSON', subjectJson);
    return subjectJson;
  } catch (e) {
    logger.error('subject error', e.message);
    return e;
  }
};

// get subjects id
const getSubjectById = async () => {
  try {
    const subject = await db("subjects").select("*").where('id',id);
    logger.info('getSubjectById response ', subject);
    const subjectJson = users.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor
    }));
    logger.info('subject JSON', subjectJson);
    return subjectJson;
  } catch (e) {
    logger.error('subject error', e.message);
    return e;
  }
};

// post subjects
const createSubject = async (subjectObject) => {
  try {
    const subject = await db("subjects").inset(subjectObject).select("*");
    logger.info('createSubject response ', subject);
    const subjectJson = users.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor
    }));
    logger.info('subject JSON', subjectJson);
    return subjectJson;
  } catch (e) {
    logger.error('subject error', e.message);
    return e;
  }
};

// put subjects id
const updateSubject = async (id, subject) => {
  try {
      const subject = await db("subjects").where('id',id).update(subject);
      logger.info('updateSubject response ', subject);
      logger.info('subject JSON', subjectJson);
      return id;
    } catch (e) {
      logger.error('subject error', e.message);
      return {};
    }
};

// delete subject id
const deleteSubject = async (id) => {
  try {
      const subject = await db("subjects").where('id',id).del();
      logger.info('deleteSubject response ', subject);
      logger.info('subject JSON', subjectJson);
      return id;
    } catch (e) {
      logger.error('subject error', e.message);
      return 0;
    }
};

module.exports = {
  getSubject,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
};