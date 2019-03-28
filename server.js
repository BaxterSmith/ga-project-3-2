const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cardController = require('./controllers/cardController.js');
const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});