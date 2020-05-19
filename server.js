const express = require('express');
const morgan = require('morgan');
const routes = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});