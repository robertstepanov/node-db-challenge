const db = require("../data/db-config.js");

module.exports = {
  find, 
  add,
  findResource,
  findTask
}

function find() {
  return db("projects");
}


function add(project) {
  return db("projects").insert(project, "id");
}

function add(resource) {
  return db("resources").insert(resource, "id");
}


function findResource(id) {
  return db('projects')
  .select('projects.name', 'resources.name')
  .join('resources', 'projects.id', 'resources.id')
  .where('projects.id', id)
}

function add(task) {
  return db("tasks").insert(task, "id");
}


function findTask(id) {
  return db('projects')
  .select('projects.name', 'projects.description')
  .join('tasks', 'projects.id', 'tasks.id')
  .where('projects.id', id)
}