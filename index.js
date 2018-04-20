const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => { bot.user.setGame('say !help') });
bot.on('message', (message) => {

    if(message.content == '!help') {
        message.channel.sendMessage('Hi There! Saya adalah AI yang dibuat oleh KaiZuke atau Sean Edbert \n Tugas saya adaah membantu kamu yang memerlukan bantuan! \n COMMANDS : \n !ranks \n !credits ');
    }

    if(message.content == '!ranks') {
        message.channel.sendMessage('Ada 7 Rank di server DB Gaming. Cara naik rank adalah dengan main bersama. HAVE FUN!\nMember : Rank Pertama di Server ini, untuk orang orang baru \nBronze : Rank Kedua, Permission sama seperti member \nSilver : Rank Ketiga \nGold : Rank Keempat \nPlatinum : Rank Kelima \nCristal : Rank keenam \nAdmiral : Rank ketujuh / Rank Tertinggi di server  ');
    }
    
    if(message.content == '!credits') {
        message.channel.sendMessage('Bot ini dibuat oleh Sean Edbert \n Coding : Sean Edbert \n Design Rank : Sean Edbert dan Ryan Theodorus \n Designer Logo : Yosua Raffel ');
    }

        

});

bot.login(process.env.BOT_TOKEN);
