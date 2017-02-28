/**
 * Created by Administrator on 2017/1/6.
 */
var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/',function (req,res,next) {
  
})
