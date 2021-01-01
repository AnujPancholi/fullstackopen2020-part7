"use strict"

const Mongoose = require("mongoose")

const commentSchema = new Mongoose.Schema({
  blogId: {
    type: Mongoose.Types.ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  userId: Mongoose.Types.ObjectId,
})

const CommentModel = Mongoose.model('Comment',commentSchema);


module.exports = CommentModel;