// Connect to the database
require("dotenv").config();
require("./config/database");


// Require the Mongoose models (these are specific to SEI Cafe)
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
// (these are specific to SEI Cafe)
let user, item, category, order;
let users, items, categories, orders;
