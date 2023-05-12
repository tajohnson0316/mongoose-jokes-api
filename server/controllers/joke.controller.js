const Joke = require("../models/joke.model");

// *** GET ALL ***
module.exports.findAllJokes = (request, response) => {
  Joke.find()
    .then((allJokes) => {
      // Response console.log:
      console.log({ results: allJokes });

      response.json({ results: allJokes });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};

// *** CREATE ONE ***
module.exports.createNewJoke = (request, response) => {
  Joke.create(request.body)
    .then((newJoke) => {
      // Response console.log:
      console.log({ results: newJoke });

      response.json({ results: newJoke });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};
