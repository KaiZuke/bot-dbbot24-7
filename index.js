const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => { bot.user.setGame('say !help') });
bot.on('message', (message) => {

    if(message.content == '!help') {
        message.channel.sendMessage('Hi There! Saya adalah AI yang dibuat oleh KaiZuke atau Sean Edbert \n Tugas saya adaah membantu kamu yang memerlukan bantuan! \n COMMANDS : \n !ranks \n !credits ');
    }

    if(message.content == '!ranks') {
        message.channel.sendMessage('Ada 7 Rank di server DB Gaming. Cara naik rank adalah dengan main bersama.\nMember : Rank Pertama di Server ini, untuk orang orang baru \nBronze : Rank Kedua, Permission sama seperti member \nSilver : Rank Ketiga \nGold : Rank Keempat \nPlatinum : Rank Kelima \nCristal : Rank keenam \nAdmiral : Rank ketujuh / Rank Tertinggi di server \nHati-Hati kalian juga bisa derank lho!! Dengan nge spam , brisik saat main game , dan hal-hal yang kurang berkenan bagi orang lain.\n HAVE FUN EVERYONE! ');
    }
    
    if(message.content == '!credits') {
        message.channel.sendMessage('Bot ini dibuat oleh Sean Edbert \n Pembuat Server : Ryan Theodorus \n Coding : Sean Edbert \n Design Rank : Sean Edbert dan Ryan Theodorus \n Designer Logo : Yosua Raffel ');
    }
    
     if(message.content == 'vote1') {
        message.reply('HAS VOTED 1');
     }
    
    if(message.content == 'vote2') {
        message.reply('HAS VOTED 2');
    }
    
    if(message.content == 'spam!!!') {
        message.reply('THE SPAMMER HAS DERANKED BECAUSE OF SPAMMING!! DONT SPAM GAMERS!!');
    }

});

bot.login(process.env.BOT_TOKEN);
