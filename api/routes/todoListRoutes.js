'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.get("/tasks", todoList.list_all_tasks);
    app.post("/tasks", todoList.create_a_task);
    app.get("/tasks/:taskId", todoList.read_a_task);
    app.put("/tasks/:taskId", todoList.update_a_task);
    app.delete("/tasks/:taskId", todoList.delete_a_task);

};