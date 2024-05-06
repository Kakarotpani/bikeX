const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const error = require("../commonLibrary/errorLib");
const success = require("../commonLibrary/successLib");

async function handleGetAllUsers(req, res) {
    try{
        const users = await userModel.find();
        res.json(users);
    }catch(e){
        console.log("Error while fetching data : " + e);
        res.status(400).json(error.UNAUTHENTICATED);
    }
};

async function handleGetUserById(req, res) {
    try{
        const user = await userModel.findById(req.params.id);
        res.json(user);
    }catch(e){
        console.log("Error while fetching data : " + e);
        res.status(400).json(error.UNAUTHENTICATED);
    }
};

async function handleCreateUser(req, res) {
    const userPayload = new userModel({
        name: req.body.name,
        isActive: req.body.isActive,
        city: req.body.city
    });
    try{
        await userPayload.save();
        res.status(200).json(success.CREATED)
    }catch(e){
        console.log("Error while saving user Data : " + e);
        res.status(400).json(error.UNAUTHENTICATED);
    }
};

async function handleUpdateUser(req, res) {
    try{
        await userModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json(success.UPDATED)
    }catch(e){
        console.log("Error while fetching data : " + e);
        res.status(400).json(error.UNAUTHENTICATED);
    }
};

async function handleDeleteUser(req, res) {
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json(success.DELETED)
    }catch(e){
        console.log("Error while fetching data : " + e);
        res.status(400).json(error.UNAUTHENTICATED);
    }
};


module.exports = {
    handleGetAllUsers, 
    handleGetUserById,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
};