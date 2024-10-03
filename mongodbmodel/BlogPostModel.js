const mongoose = require("mongoose");

// Define the schema for BlogPost
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.length === new Set(v).size; // Check for unique tags
      },
      message: "Tags must be unique!",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User collection
    required: true,
  },
});

// Create and export the BlogPost model
const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;
