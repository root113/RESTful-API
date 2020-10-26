const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
require(`dotenv/config`);

app.use(bodyParser.json());
//*app.use(bodyParser.urlencoded({ extended: false}));

//Import routes
const postsRoute = require(`./routes/posts`);

app.use(`/posts`, postsRoute);

//Listening to the server
app.listen(3000);

//?Connect to database
/*
  !Connection string is in .env file
  !which is not pushed to github for
  !security reasons since it contains
  !username and password
*/
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Connection to the cluster is successful!`);
  }
);
