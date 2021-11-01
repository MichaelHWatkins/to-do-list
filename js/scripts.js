//List Business Logic
function ToDOList() {
  this.tasks = {};
  this.cuurentID =0;
}

ToDOList.prototype.addTask = function
(task) {
  task.id= this.assignId();
  this.tasks[task.id] = task;
};

ToDOList.prototype.deleteTask = function(id) {
  if (this.task[id] === undefined) {
    return false;
  }
  
  delete this.task[id];
  return true;
}

ToDOList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
//Task Business Logic

function Task(description, done) {
  this.description = description;
  this.done = done;
}