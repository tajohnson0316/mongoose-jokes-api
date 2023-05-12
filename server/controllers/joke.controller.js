const Joke = require("../models/joke.model");

// *** GET ALL ***
module.exports.findAllJokes = (request, response) => {
  /**
   * .find()
     @param: none 
   */
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

// *** GET ONE ***
module.exports.findOneJoke = (request, response) => {
  /** 
    .findOne({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Joke.findOne({ _id: request.params.id })
    .then((oneJoke) => {
      // Response console.log:
      console.log({ results: oneJoke });

      response.json({ results: oneJoke });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};

// *** CREATE ONE ***
module.exports.createNewJoke = (request, response) => {
  /** 
    .create({request.body})
    @param: the body/data of the client request
  */
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

// *** UPDATE ONE ***
module.exports.updateExistingJoke = (request, response) => {
  /**
    .findOneAndUpdate({_id: request.params.id}, request.body, {new, runValidators})
    @param: the passed in "id" from the URL
    @param: the body/data of the client request
    @param: update options
  */
  Joke.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      // Response console.log:
      console.log({ results: updatedJoke });

      response.json({ results: updatedJoke });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};

// *** UPDATE ONE ***
module.exports.deleteExistingJoke = (request, response) => {
  /**
    .findOneAndUpdate({_id: request.params.id})
    @param: the passed in "id" from the URL
  */
  Joke.deleteOne({ _id: request.params.id })
    .then((deletedJoke) => {
      // Response console.log:
      console.log({ results: deletedJoke });

      response.json({ results: deletedJoke });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};
