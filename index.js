const Discord = require('discord.js');

const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.on('message', (message) => {
    if(message.content == 'Yoo BOT'){
        // message.reply('pong');
        message.channel.sendMessage('Yo')
    }

});

bot.on('message', (message) => {
    if(message.content == '?everyone'){
        // message.reply('pong');
        message.channel.sendMessage('@everyone')
    }

});

bot.on('message', (message) => {
    if(message.content == '?here'){
        // message.reply('pong');
        message.channel.sendMessage('@here')
    }

});

bot.on('message', (message) => {
    if(message.content == '?8ball'){
        // message.reply('pong');
        message.channel.sendMessage('Hoi, Hoe gaat het')
    }

});

bot.on('message', (message) => {
    if(message.content == 'Goed'){
        // message.reply('pong');
        message.channel.sendMessage('Mooizo, Fijne dag verder')
    }

});

bot.on('message', (message) => {
    if(message.content == 'goed'){
        // message.reply('pong');
        message.channel.sendMessage('Mooizo, Fijne dag verder')
    }

});

bot.on('message', (message) => {
    if(message.content == 'Slecht'){
        // message.reply('pong');
        message.channel.sendMessage('Aawl, Wat naar voor je. Missien kan je hulp vragen bij een @Staff lid')
    }

});

bot.on('message', (message) => {
    if(message.content == 'slecht'){
        // message.reply('pong');
        message.channel.sendMessage('Aawl, Wat naar voor je. Missien kan je hulp vragen bij een @Staff lid')
    }

});

bot.on('message', (message) => {
    if(message.content == '?invitebot'){
        // message.reply('pong');
        message.channel.sendMessage('http://bit.ly/inviteessentials')
    }

});

bot.on('message', (message) => {
    if(message.content == '481-291-031'){
        // message.reply('pong');
        message.channel.sendMessage('Je discord ID ~481-291-031~ is nu gelinkt aan je discord account')
        var role9 = member.guild.roles.find('name', 'MC Server Member')
        member.addRole(role9);
    }

});

bot.on('message', (message) => {
    if (message.channel.id === '462520074092412928') {
        (isNaN(message.content))
            message.delete()
        }
    }

);

bot.on('guildMemberAdd', member => {
    console.log('User' + member.username + 'Has joined the server')
    var role = member.guild.roles.find('name', 'online')
    member.addRole(role);
    var role1 = member.guild.roles.find('name', 'iedereen')
    member.addRole(role1);
    var role2 = member.guild.roles.find('name', 'everyone')
    member.addRole(role2);
    var role3 = member.guild.roles.find('name', 'here')
    member.addRole(role3);
    var role4 = member.guild.roles.find('name', 'hier')
    member.addRole(role4);
    }

);

bot.on('message', (message) => {
    if(message.content == ':ikbennitro:'){
        member.addRole('Nitro');
    }

});

bot.on('message', (message) => {
    if(message.content == '?help'){
        message.channel.sendMessage('**Essentials HelpCentre**')
        message.channel.sendMessage('**---------------------**')
        message.channel.sendMessage('?`help` || Opens this menu')
        message.channel.sendMessage('?`8ball` || Fun command')
        message.channel.sendMessage('?`purge` [number] || Deleting messages')
        message.channel.sendMessage('?`everyone` || Types @`everyone`')
        message.channel.sendMessage('?`here` || Types @`here`')
        message.channel.sendMessage('?`invitebot` || Gives invite link')
        message.channel.sendMessage('!`meme` || Gives you a meme')
        message.channel.sendMessage('**---------------------**')
    }

});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.on('ready', () => {
    console.log('Bot Started')
    bot.user.setGame('essentials.tk || ?help', 'http://twitch.tv/lolcraftingofficial')
});

bot.login('NDYyNTkzNzQyNjQ2NDExMjc1.DhkIfA.xsRrnTSqR83Fb_3mPX63bPWlPZs')