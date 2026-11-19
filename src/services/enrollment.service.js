const crypto = require('crypto');
const enrollment.Model = require('../models/enrollment.Model');

const findAll = async (filters) => {
    return enrollment.Model.findAll(filters);
};

const findById = async (id) => {
    return enrollment.Model.findById(id);
};

const create = async (payload) => {
    const id = 'enr_' + crypto.randomUUID().slice(0, 8);
    return enrollment.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await enrollment.Model.findById(id);
    if (!existing) {
        const error = new Error('Enrollment. not found');
        error.status = 404;
        throw error;
    }
    return enrollment.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return enrollment.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
