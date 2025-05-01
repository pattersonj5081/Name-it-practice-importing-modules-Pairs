const taskManager = require("./task-manager.js"); 
const fs = require("fs"); 
/*const tasks = {
  description: "Walk the dog", 
  priority: "high",
  isComplete: true
};*/

function saveTasks(filePath, tasks){ // writes the tasks to a file in JSON format 
  tasksJSON = JSON.stringify(tasks)
  fs.writeFileSync(filePath, tasksJSON)
  console.log(`These tasks have been saved to ${filePath} successfully!`); 
}; 

function loadTasks (filePath){ 
  data = []                                 //Reads and parses the tasks from the file in JSON format 
  if (fs.existsSync(filePath)){
        console.log(`The file path: ${filePath} exists!`)            
        data = fs.readFileSync(filePath, "utf-8");
        console.log(`Your tasks have been successfully loaded to the ${filePath}`); 
    }
  return JSON.parse(data); 
}; 

module.exports = {saveTasks, loadTasks}; 