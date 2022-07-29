const Todos = require("../model/todoModel"); // requiring the todo models
const express = require('express')
const router = express.Router()

// for taking data from the body
const bodyParser = require("body-parser"); // we can also use express.json( ) like that
router.use(bodyParser.json());



// getting all the todos
router.get("/", async (req, res) => {
    const allTodos = await Todos.find();
    res.status(200).send(allTodos);
  });
  
  // adding new todos
router.post("/", async (req, res) => {
    const { body } = req.body;
  
    if (!body) {
      return res.send("Plese Write something");
    }
  
    const newTodo = new Todos({
      body: body,
    });
  
    const savedTodo = await newTodo.save();
    res.send(savedTodo);
  });
  
  // adding marked as completed and incomplete
router.post("/mark", async (req, res) => {
  
    const { markId ,completed } = req.body;

    const marked = await Todos.updateOne(
      { _id: markId },
      { $set: { completed: completed } }
    );

    res.send({ msg: "Task Completed" });
  });
  
  // to delele a particular todo
router.delete("/delete/:toDeleteId", async (req, res) => {
    const toDelete = req.params.toDeleteId;
    const deleted = await Todos.deleteOne({ _id: toDelete });
    res.send(deleted);
  });


  module.exports = router;
