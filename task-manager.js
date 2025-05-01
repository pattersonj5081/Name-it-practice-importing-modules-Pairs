function addTask(tasks, task){ // adds tasks to an array 
   tasks.push(task)
   console.log(`Your tasks have been added successfully!`) 
   return tasks 
}; 



function listTasks(tasks){ // logs to the console
    console.log(tasks) 
}; 


module.exports = {addTask, listTasks}