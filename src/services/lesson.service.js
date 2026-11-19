const crypto = require('crypto');
const lesson.Model = require('../models/lesson.Model');

const findAll = async (filters) => {
    return lesson.Model.findAll(filters);
};

const findById = async (id) => {
    return lesson.Model.findById(id);
};

const create = async (payload) => {
    const id = 'les_' + crypto.randomUUID().slice(0, 8);
    return lesson.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await lesson.Model.findById(id);
    if (!existing) {
        const error = new Error('Lesson. not found');
        error.status = 404;
        throw error;
    }
    return lesson.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return lesson.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
