const crypto = require('crypto');
const progress.Model = require('../models/progress.Model');

const findAll = async (filters) => {
    return progress.Model.findAll(filters);
};

const findById = async (id) => {
    return progress.Model.findById(id);
};

const create = async (payload) => {
    const id = 'pro_' + crypto.randomUUID().slice(0, 8);
    return progress.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await progress.Model.findById(id);
    if (!existing) {
        const error = new Error('Progress. not found');
        error.status = 404;
        throw error;
    }
    return progress.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return progress.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
