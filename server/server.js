// *** EXPRESS IMPORTS ***
const express = require("express");
const app = express();

// *** DOTENV IMPORTS ***
require("dotenv").config();
const PORT = process.env.PORT;

// *** MONGOOSE IMPORTS ***
require("./config/mongoose.config");

// *** MIDDLEWARE ***
app.use(express.json(), express.urlencoded({ extended: true }));

// *** ROUTES IMPORT ***
require("./routes/joke.routes")(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
