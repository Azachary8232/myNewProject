const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
require('./routes/person.routes')(app);
const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

//  middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);

app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
