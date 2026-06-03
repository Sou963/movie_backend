const { getDB } = require("../config/db");

const users = () => getDB().collection("users");

module.exports = users;
