const crypto = require('crypto');
const certificate.Model = require('../models/certificate.Model');

const findAll = async (filters) => {
    return certificate.Model.findAll(filters);
};

const findById = async (id) => {
    return certificate.Model.findById(id);
};

const create = async (payload) => {
    const id = 'cer_' + crypto.randomUUID().slice(0, 8);
    return certificate.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await certificate.Model.findById(id);
    if (!existing) {
        const error = new Error('Certificate. not found');
        error.status = 404;
        throw error;
    }
    return certificate.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return certificate.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
