const { JSON } = require("stream/consumers");
const taskManager = require("./task-manager.js"); 
const fs = require("fs"); 

function saveTasks(filePath, tasks){
fs.writeFileSync(filePath, (tasks))
}; 

function loadTasks (filePath){
if (fs.existsSync(filePath)){
  const data =  fs.readFileSync(filePath, "utf-8")
    return JSON.parse(data); 
}else{
return []
}
};

module.exports = {saveTasks, loadTasks}; 