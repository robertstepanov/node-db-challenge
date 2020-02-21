const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});


router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});


router.get("/", (req, res) => {
  Projects.find()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Projects.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;

  Projects.findResource(id)
    .then(resources => {
      if (resources.length) {
        res.json(resources);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resources for given project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Projects.add(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.findTask(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: "Could not find task for given project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});






module.exports = router;