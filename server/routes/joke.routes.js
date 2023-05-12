const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  // GET ALL route
  app.get("/api/jokes", JokeController.findAllJokes);

  // CREATE ONE route
  app.post("/api/jokes", JokeController.createNewJoke);
};
