const db = require('./db.js');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const createUser = async function (req, res, next) {

};

const verifyUser = async function (req, res, next) {
    // check if req.body has email and password properties
    if (!('email', 'password' in req.body)) {
        res.status(400).send('ERROR: Malformed request')
    };

};

module.exports = {
    createUser,
    verifyUser
};