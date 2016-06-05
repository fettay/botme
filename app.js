var express = require('express');
var Bot = require('messenger-bot');
var ACCESS_TOKEN = 'EAAYkkZA9wDgwBAHLyHHwhXIcNlgu4fsUsVkAkIKSZChu7pdMRoLHAPnqOgiSp3KTnR4ZAc3dtEZBKqFj4jM3eot03V1BeswKulgO3RlZB8igvEG205ZApxtZAcoWZBT7fiK9aQCZBV6dso6JAMnE0tKWSTGEBR6MpVxbSZBxZB9ehl84wZDZD';
var http = require('http');

var app = express();


var bot = new Bot({
  token: ACCESS_TOKEN,
  verify: 'raph_token'
});


bot.on('error', function(err){
  console.log(err.message)
});

bot.on('message', function(payload, reply){
  var text = payload.message.text

  bot.getProfile(payload.sender.id, function(err, profile){
    if(err){
    console.log(err);
    }

      var response_message = 'Hey ' + profile.first_name;
      if(text == 'fettay'){
        response_message = 'You just entered the magic code: FUCK YOU';
      }
      bot.sendMessage(payload.sender.id,{text: response_message}, function(err, info){
      if(err){
        console.log(err);
      }
    });
  });
});


http.createServer(bot.middleware()).listen(3000, function(){
  console.log('App is listening');
})

module.exports = app;
