/**
 * Created by wangpeiliang on 2017/3/6.
 */
var express = require('express');
var router = express.Router();

router.get('/user',function(req,res,next){
    res.send('Api - User');
});

module.exports = router;