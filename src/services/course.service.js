const crypto = require('crypto');
const course.Model = require('../models/course.Model');

const findAll = async (filters) => {
    return course.Model.findAll(filters);
};

const findById = async (id) => {
    return course.Model.findById(id);
};

const create = async (payload) => {
    const id = 'cou_' + crypto.randomUUID().slice(0, 8);
    return course.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await course.Model.findById(id);
    if (!existing) {
        const error = new Error('Course. not found');
        error.status = 404;
        throw error;
    }
    return course.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return course.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
