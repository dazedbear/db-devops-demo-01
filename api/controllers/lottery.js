'use strict';
const util = require('util');
const http = require('http');

module.exports = {
    lottery_boom,
    check_number,    
};

function lottery_boom(req, res){
    let lucky = createLucky();
    res.json(lucky);
}

function check_number(req, res){
    let lucky = createLucky(),
        target = req.swagger.params.match_numbers.value,
        format = /(\d+\,){5}\d/g;
    if(!target){
        res.json({"code":"200", "message":"Input numbers cannot be null."});
    }else if(!format.test(target)){
        console.log(target)
        console.log(!format.test(target))
        res.json({"code":"200", "message":"Input numbers format error, follow below format: 1,2,3,4,5,6."});
    }else{
        let result = {
            "lucky_number": lucky.join(','),
            "yout_number": target,
        };
        result.match = target.split(',').every((num, i) => lucky.indexOf(num) !== -1);
        res.json(result);
    }
}

function createLucky(){
    let lucky = [];
    while(lucky.length < 6){
        let number = Math.floor(Math.random()*52) + 1;
        if(lucky.indexOf(number) !== -1) continue;
        lucky.push(number);
    }
    return lucky;
}