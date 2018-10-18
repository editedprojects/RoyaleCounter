const Discord = require('discord.js');
const moment = require("moment");
const fs = require("fs");
const sql = require("better-sqlite3");
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
    client.user.setActivity("ROYALE 5KK.. ",{type: 'PLAYING'})

});


client.on('message',async message => {
if(message.content === "#members") {
return message.channel.send(`**RG Members : \`${message.guild.memberCount}\` .**`);
}
});



 client.login(process.env.BOT_TOKEN); 
