const fileHandler = require("./filehandler.js"); 
const taskManager = require("./task-manager.js"); 
const path = require("path"); 

//put the new path here, the .json file
const filePath = path.join(__dirname, "tasks.json");

let task1 = {
    description: "Walk the dog", 
    priority: "high",
    isComplete: false
  }; 
let task2 = {
    desciption: "Grocery Run",
    priority: "medium",
    isComplete: false 
}; 
let task3 ={
    description: "Wash the Car",
    priority: "low",
    isComplete: false
};
let taskList = []; 

// this is loading them
taskList = fileHandler.loadTasks(filePath);

// this adds them
taskManager.addTask(taskList, task1);
taskManager.addTask(taskList, task2);

// this lists them
taskManager.listTasks(taskList);

// this saves them & creates the json
fileHandler.saveTasks(filePath, taskList);


// we don’t need to create a json file if we’re adding the tasks and saving them; saving them makes the json

