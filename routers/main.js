/**
 * Created by wangpeiliang on 2017/3/6.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index');
});

module.exports = router;