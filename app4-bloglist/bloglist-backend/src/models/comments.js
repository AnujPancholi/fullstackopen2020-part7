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
  userId: {
    type: Mongoose.Types.ObjectId
  }
})

commentSchema.set('toJSON',{
  transform: (doc,obj) => {
    obj.id = obj._id.toString();
    delete obj._id;
    delete obj.__v;
  }
})

const CommentModel = Mongoose.model('Comment',commentSchema);




module.exports = CommentModel;