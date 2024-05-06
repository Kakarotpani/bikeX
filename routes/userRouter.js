const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router
    .route('/')
    .get(userController.handleGetAllUsers)
    .post(userController.handleCreateUser);

router
    .route('/:id')
    .get(userController.handleGetUserById)
    .put(userController.handleUpdateUser)
    .delete(userController.handleDeleteUser);

module.exports = router;
