const express = require("express");
const noteRouter = express.Router();
const passport = require("passport");
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const note = require("../models/note");

//get All notes route
noteRouter
  .route("/notes")
  .get( getAllNotes);

//create note route
noteRouter
  .route("/createnote")
  .post(passport.authenticate("jwt", { session: false }), createNote);

//update note route
noteRouter
  .route("/updatenote/:id")
  .put(passport.authenticate("jwt", { session: false }), updateNote);

//delete note route
noteRouter.route("/deletenote/:id").delete(passport.authenticate("jwt", {session: false}), deleteNote)

module.exports = noteRouter;
