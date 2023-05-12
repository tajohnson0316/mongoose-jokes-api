const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  // GET ALL route
  app.get("/api/jokes", JokeController.findAllJokes);

  // GET ONE route
  app.get("/api/jokes/:id", JokeController.findOneJoke);

  // CREATE ONE route
  app.post("/api/jokes", JokeController.createNewJoke);

  // UPDATE ONE route
  app.patch("/api/jokes/:id", JokeController.updateExistingJoke);

  // DELETE ONE route
  app.delete("/api/jokes/:id", JokeController.deleteExistingJoke);
};
