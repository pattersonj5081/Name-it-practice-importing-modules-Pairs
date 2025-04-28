const fileHandler = require("./filehandler.js"); 
const taskManager = require("./task-manager.js"); 
const path = require("path"); 

//put the new path here, the .json file
const filePath = path.join(__dirname, "tasks.json");

// this is loading them
let tasks= fileHandler.loadTasks(filePath);

// this adds them
taskManager.addTask(tasks, "Finish this coding assignment in this breakout room with classmates");
taskManager.addTask(tasks, "Go to the grocery store for beef jerky");

// this lists them
taskManager.listTasks(tasks);

// this saves them & creates the json
fileHandler.saveTasks(filePath, tasks);


// we don’t need to create a json file if we’re adding the tasks and saving them; saving them makes the json

