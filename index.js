const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content == '!help') {
        message.channel.sendMessage('COMMANDS : !ranks');
    }

    if(message.content == '!ranks') {
        message.channel.sendMessage('Ada 7 Rank di server DB Gaming. Cara naik rank adalah dengan main bersama. HAVE FUN! ');
    }

        

});

bot.login(process.env.BOT_TOKEN);
