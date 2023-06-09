const express = require("express");
const  app = express();
const cors = require("cors");
const pool = require("./db.js");

//Midddleware
app.use(cors());
app.use(express.json());


//Routes//

//Create a todo
app.post('/todos', async(req, res) => {
    try{
        const {description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]); 
        res.json(newTodo.rows[0]);
    } catch(err){
        console.log(err.message);
    }
});

//Get all todos
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//Get a todo
app.get("/todos/:id", async(req, res) => {
    try{
        const { id } = req.params;  //params gives me the id of the specific api I desire to look at
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

//Update a todo
app.put("/todos/:id", async(req, res) => {
    try{
        const { description } = req.body
        const { id } = req.params
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
                                    [description, id]);
        res.json("Todo was updated");
    } catch (err) {
        console.log(err.message);
    }
});

//Delete all todos
app.delete("/todos/:id", async(req, res) => {
    try{
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
        res.json("Item was deleted");
    } catch (err) {
        console.log(err.message)
    }
});

//Creating port connection to localhost 5000
app.listen(5000, () => {
    console.log("Server has started on port 5000");
});