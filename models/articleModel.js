const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const articleSchema = new Schema({
  // `title` is required and of type String
  date: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});


// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", articleSchema);
// Export the Article model
module.exports = Article;