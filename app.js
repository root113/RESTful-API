const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);

app.use(bodyParser.json());
//*app.use(bodyParser.urlencoded({ extended: false}));

//Import routes
const postsRoute = require(`./routes/posts`);

app.use(`/posts`, postsRoute);

//Listening to the server
app.listen(3000);

//?Connect to database
mongoose.connect(/*!Your db connection script */, { useNewUrlParser: true }, () => {
    console.log(`Connection to the cluster is successful!`);
});