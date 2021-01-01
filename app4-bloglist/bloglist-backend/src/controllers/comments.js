"use strict"

const commentsRouter = require("express").Router();
const CommentModel = require("../models/comments.js");
const UserModel = require("../models/users.js");

const logger = require('../utils/logger.js');
const mongooseUtils = require("../utils/mongooseUtils.js");
const tokenValidator = require("../middlewares/tokenValidator.js");


commentsRouter.post("/",tokenValidator,async(request,response,next) => {
  const resultObj = {
    success: false,
    error: null,
    data: null,
    resCode: 500
  }
  try{
    const MANDATORY_PARAMS = [{
      keyname: "blogId",
      type: "id"
    }, {
      keyname: "userId",
      type: "id"
    },{
      keyname: "text",
      type: "string"
    }]
   
    MANDATORY_PARAMS.forEach(__param => {
      if(!request.body[__param.keyname]){
        resultObj.success = false;
        resultObj.data = null
        resultObj.error = {
          message: "MANDATORY PARAM MISSING"
        }
        resultObj.resCode = 400;
        throw new Error("MANDATORY PARAM MISSING")
      }
      switch (__param.type) {
      case 'id':
        request.body[__param.keyname] = mongooseUtils.getObjectId(request.body[__param.keyname]);
        break;
      case 'string':
        request.body[__param.keyname] = String(request.body[__param.keyname]);
        break;
      case "number":
        request.body[__param.keyname] = parseFloat(request.body[__param.keyname]);
        break;
      default:
        break;
      }
    })

    const comment = new CommentModel(request.body)

    const commentAddResult = await comment.save();

    resultObj.success = true;
    resultObj.data = {
      message: "COMMENT ADDED",
      comment: commentAddResult
    }
    resultObj.error = null;
    resultObj.resCode = 200;

  }catch(e){

    if(!resultObj.error){
      resultObj.resCode = 500;
      resultObj.error = {
        message: "INTERNAL SERVER ERROR"
      },
      resultObj.data = null;
      resultObj.success = false;
    }

  }

  next(resultObj)

})

const requestProcessingResultHandler = (resultObj,req,res,next) => {
  if(resultObj.success){
    res.status(resultObj.resCode).send(resultObj.data);
  } else {
    logger.error(`blog|ERROR|${resultObj.error}`);
    res.status(resultObj.resCode).send(resultObj.error);
  }
}

commentsRouter.use(requestProcessingResultHandler)

module.exports = commentsRouter;