const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => { bot.user.setGame('say !help') });
bot.on('message', (message) => {
        
   const swearWords = ["anjg", "bgst", "tai", "kntl", "anjing", "kontol", "bangsat", "titit", "goblok", "ngentot", "tolol", "tot"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
     message.reply("Tiati omongannya y!");
    }
        
    if(message.content == '!challenge maxwell') {
            message.reply('HAS CHALLENGED MAXWELL\n<@!299829365888385027> ,Do you accept this challenge?\n!y or !n')
    }
        
        if(message.content == '!challenge sean') {
            message.reply('HAS CHALLENGED SEAN\n<@!223725589427781632> ,Do you accept this challenge?\n!y or !n')
        }
        
             if(message.content == '!challenge bagas') {
            message.reply('HAS CHALLENGED BAGAS\n<@273751740539469824> ,Do you accept this challenge?\n!y or !n')
        }
        
        if(message.content == '!challenge tobi') {
            message.reply('HAS CHALLENGED TOBI\n<@!153284385888665600> ,Do you accept this challenge?\n!y or !n')
         }
        
        if(message.content == '!challenge aurel') {
            message.reply('HAS CHALLENGED AUREL\n<@!282735594147282946> ,Do you accept this challenge?\n!y or !n')
        }
        
        if(message.content == '!challenge yosua') {
            message.reply('HAS CHALLENGED YOSUA\n<@!276958036432519168> ,Do you accept this challenge?\n!y or !n')
        }        
        
        if(message.content == '!challenge william') {
            message.reply('HAS CHALLENGED WILLIAM\n<@!300231041971519488> ,Do you accept this challenge?\n!y or !n')
        }        
        
        if(message.content == '!challenge falcon') {
            message.reply('HAS CHALLENGED FALCON\n<@!332717412493557761> ,Do you accept this challenge?\n!y or !n')
        }        
        
        if(message.content == '!challenge bryan') {
            message.reply('HAS CHALLENGED BRYAN\n<@!332717412493557761> ,Do you accept this challenge?\n!y or !n')
        }        
        
        if(message.content == '!challenge vincent') {
            message.reply('HAS CHALLENGED VINCENT\n<@274509696919142402> ,Do you accept this challenge?\n!y or !n')
        }        
        
        if(message.content == '!y') {
                message.reply('HAS ACCEPTED THE CHALLENGE!\nGOOD LUCK HAVE FUN!')
        }
        
        if(message.content == '!n') {
                message.reply('HAS DECLINED THE CHALLENGE!\npussy.')
        }
        
     if(message.content == '?challenge') {
        message.channel.sendMessage('Challenge salah satu anggota grup ini dalam 1v1 csgo (Senjata Apapun).\nYang menang akan naik rank dan yang kalah akan turun rank :D.\nGOOD LUCK HAVE FUN!');
    }
     
     if(message.content == '!help') {
        message.channel.sendMessage('Hi There! Saya adalah AI yang dibuat oleh KaiZuke atau Sean Edbert \n Tugas saya adalah membantu kamu yang memerlukan bantuan! \n COMMANDS : \n !ranks untuk melihat rank apa saja di server ini \n !credits untuk melihat credits\n ?challenge = challenge help \n ?derank untuk mengetahui lebih lanjut cara derank \n ?kick untuk mengetahui aturan KICK dan BAN ');
    }
    
    if(message.content == 'dn!help') {
        message.channel.sendMessage('DayNight Music BOT dibuat oleh KaiZuke\n- dn!play (nama lagu atau link lagu youtube) = play lagu\n-dn!join = membuat BOT join ke channel\n-dn!list = mengetahui berapa lagu di antrian\n-dn!pause = pause lagu\n-dn!resume = resume lagu yang sedang di pause\nMungkin kalian semua bingung kenapa gw buat bot ini karena udah ada FreddieBot.\nGw bikin DNMusicBot ini berbahasa indonesia supaya maxwell ngerti.\n U know la Maxwell kennot speak english ehe.');
    }

    if(message.content == '!ranks') {
        message.channel.sendMessage('Ada 7 Rank di server DB Gaming. Cara naik rank adalah dengan main bersama.\nMember : Rank Pertama di Server ini\n Permission : Tidak Ada \nBronze : Rank Kedua\n Permission sama seperti member \nSilver : Rank Ketiga\n Permission sama seperti member \nGold : Rank Keempat\n Permission sama seperti member \nPlatinum : Rank Kelima\n Permission : Dapat memindahkan user lain ke call lain di kategori GAMES \nCristal : Rank keenam\n Permission : Dapat memindahkan user lain ke call lain \nAdmiral : Rank ketujuh\n Permission : Dapat memindahkan user lain ke call lain dan Dapat mengubah NICKNAME user lain  \nGenesis : Rank kedelapan / Rank tertinggi di server\n Permisson : Dapat memindahkan user lain ke call lain , mengubah NICKNAME user lain , dan Dapat menggunakan "SERVER MUTE" dan "SERVER DEAFEN" \nHati-Hati kalian juga bisa derank lho!! Dengan nge spam , brisik saat main game , dan hal-hal yang kurang berkenan bagi orang lain.\nKeterangan Cara DERANK lebih lanjut ketik "?derank"\n HAVE FUN EVERYONE! ');
    }
    
    if(message.content == '!credits') {
        message.channel.sendMessage('Bot ini dibuat oleh Sean Edbert \n Pembuat Server : Ryan Theodorus \n Coding : Sean Edbert \n Design Rank : Sean Edbert dan Ryan Theodorus \n Designer Logo : Yosua Raffel ');
    }
    
     if(message.content == '?derank') {
        message.reply('Cara derank adalah dengan mengganggu orang yang sedang bermain dengan play "EARRAPE" atau dengan membuat suara brisik seperti meniup microphone, bertriak, dan lain-lain.\nKalian juga bisa derank dengan mengespam di chat ');
     }
    
    if(message.content == 'Kicked eric') {
        message.reply('User : GhostChi has been kicked.\nReason : You have been voted off with Maxwell , William , Bagas , Aldo. "Goblok , kontol , autis." -Maxwell');
    }
    
    if(message.content == 'spam!!!') {
        message.delete().catch(O_o=>{}); 
        message.channel.sendMessage('THE SPAMMER HAS DERANKED BECAUSE OF SPAMMING!! DONT SPAM GAMERS!!');
    }
    
    if(message.content == '?kick') {
        message.channel.sendMessage('ATURAN KICK :\n1. Jika ingin mengeKICK seseorang, kumpulkanlah minimal 3 orang yang ingin mengekick orang tersebut.\n2. Orang sudah terKICK ? Tenang kalian bisa invite lagi kok.\n3. Ingin orang tersebut kena BANNED ? kumpulkan lebih dari 5 orang yang ingin orang tersebut terBANNED dari server.\n4. Ingin memulai VOTE KICK ? Hubungi Admin server.\nADMIN SERVER TIDAK TERLIBAT DALAM PERMASALAHAN KICK.\natau N E T R A L');
    }
    
    if(message.content == 'UP_DATE_V3.2') {
            message.delete().catch(O_o=>{});
        message.channel.sendMessage('DB BOT HAS BEEN UPDATED! VERSION 3.2\nCHANGE LOG : Fixed Bugs !');
    }
    
    if(message.content == '!request') {
        message.reply('has requested to be in the challenge.');
    }
        
     if(message.content == '!check_bot') {
        message.channel.sendMessage('DB BOT IS ONLINE !\nVer. 3.1');
     }

});

bot.login(process.env.BOT_TOKEN);
