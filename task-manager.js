function addTask(tasks, task){ // adds tasks to an array 
 tasks.push(task)
 return 
}; 

function listTasks(tasks){
    return tasks 
}; 


module.exports = {addTask, listTasks}