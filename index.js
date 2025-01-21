const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // <-- Updated

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./utils/db');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

// Proper 404 Page
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' }); // <-- Updated
});

app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});