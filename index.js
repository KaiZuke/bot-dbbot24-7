const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content == '!help') {
        message.channel.sendMessage('Hi There! Saya adalah AI yang dibuat oleh KaiZuke atau Sean Edbert \n Tugas saya adaah membantu kamu yang memerlukan bantuan! \n COMMANDS : \n !ranks \n !credits ');
    }

    if(message.content == '!ranks') {
        message.channel.sendMessage('Ada 7 Rank di server DB Gaming. Cara naik rank adalah dengan main bersama. HAVE FUN! ');
    }
    
    if(message.content == '!credits') {
        message.channel.sendMessage('Bot ini dibuat oleh Sean Edbert \n Coding : Sean Edbert \n Design Rank : Sean Edbert dan Ryan Theodorus ');
    }

        

});

bot.login(process.env.BOT_TOKEN);
