
const Discord = require('discord.js')
const client = new Discord.Client()
client.login(proccess.env.BOT_TOKEN);

client.on("message", (message) => {
    
if (message.content == "hi1") {
    client.user.setAvatar('./download.jpg');

}


if (message.author == client.user) {
    return;
} else {
        
    client.user.setPresence({ status: 'dnd', game: { name: '!help | Im in ' + client.guilds.size + " servers"} });

    //admin commands
    const adminRole = message.guild.roles.find(role => role.name == "superior");


    /*if (message.content.startsWith('!kick')) {
        const member = message.mentions.members.first()
        
        if (!member) {
        return message.reply(`Who are you trying to kick? You must mention a user.`)
        }
        if (!member.kickable) {
        return message.reply(`I can't kick this user.`)
        }
        return member
        .kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
    }

    if (message.content.startsWith('!unban')) {
        const member = message.mentions.members.first()
        
        if (!member) {
        return message.reply(`Who are you trying to unban? You must mention a user.`)
        }
        if (!member.kickable) {
        return message.reply(`I can't ban this user.`)
        }
        return member
        .unban()
        .then(() => message.reply(`${member.user.tag} was unbanned.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
    }

    if (message.content == ".bulk 4") {
        message.channel.bulkDelete(4);
        message.channel.lastMessage;

    }
*/
}

    if (message.content.startsWith('!mute')) {
        exports.run = (client, message, [mention, minutes, ...reason]) => {
            // You need to parse those arguments, I'll leave that to you
          
            // This is the role you want to assign to the user
            let mutedRole = message.guild.find(role => role.name == "muted");
            // This is the member you want to mute
            let member = message.mentions.members.first();
          
            // Mute the user
            member.addRole(mutedRole, `Muted by ${message.author.tag} for ${minutes} minutes. Reason: ${reason}`);
          
            // Unmute them after x minutes
            setTimout(() => {
              member.removeRole(mutedRole, `Temporary mute expired.`);
            }, minutes * 60000);
          };
    } 

    // fun commands
    if(message.content.startsWith('!gay')) {
            var k = Math.floor(Math.random() *100 );
            const member = message.mentions.members.first();
            var i = 0;
            if (message.author.id == "535867794970116097") {
                message.reply("You have been banned from this command. You're too gay.");
                i++;
            } else {
                if (!member && i == 0 ){ 
                    message.reply("You are " + k + "% gay"); 
                } else {
                    
                    message.channel.sendMessage(`${member.user.tag}` + " is " + k + "% gay");
                }
            }
    }

    if(message.content.startsWith('!rich')) {
        var R = ['poor', 'rich', 'average',  'average', 'average', 'average','poor','poor','poor','poor','poor'];
        var P = Math.floor(Math.random() *R.length );
        const member = message.mentions.members.first();
        if(!member) {
            message.channel.sendMessage( "You are going to be " + R[P] + " in the future.");
        } else {
        message.channel.sendMessage(`${member.user.tag}` + " is going to be " + R[P] + " in the future.");
        }
    }
    
    if(message.content.startsWith('!rel') || message.content.startsWith('.religion')  ) {
        const member = message.mentions.members.first();

        var P = Math.floor(Math.random() *100 );
        var religions = ["muslim", "christian", "buddhist", "hindu"];
        var o = Math.floor(Math.random () * religions.length);
        if (!member) { message.reply("You are a " + religions[o] + " and you are " + P + "% religious"); }
        if (member) {message.channel.send(`${member.user.tag}` + " is " + religions[o] + " and he/she is " + P + "% religious");}
    }  

    if(message.content.startsWith('!stat') ) {
        var count = client.users.size;
        var serverCount = client.guilds.size;
        message.channel.sendMessage("I'm currently in " + serverCount + " different servers");


    }
    if (message.content.startsWith('nigger')) {
        message.react("🤔");
    }
    if (message.content.startsWith('anna')) {
        message.react("🌈");
    }

    if(message.content.startsWith('!size')) {
        var ninee = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
        const member = message.mentions.members.first();
        if (!member) { 
            message.channel.sendMessage(ninee + " inch is your size"); 
        } else {
        message.channel.sendMessage(ninee + " inch is " + `${member.user.tag}` +  "'s size");
        }
    }

    
    // end fun commands
    // music bot stuff 
   
    
    
        

    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel.');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first.');
      }
    }
    // end music bot stuff
    
    //help command
    if (message.content.startsWith('!help')) {
        message.channel.sendMessage("```ADMIN COMMANDS -- Doesn't work for now\n 1. !kick\n 2. !ban\n \nFUN COMMANDS\n 1. !gay \n 2. !religion (!rel)\n 3. !rich\n 4. !size```");
    }



    // junk commands
    if (message.content == "anna") {
        message.channel.send("", {
            file: "./2.png" 
        });
    }

    if(message.content == "lesbian") {
        message.channel.send("", {
            file: "./3.png" 
        });
        
    }
    if(message.content == "21388881954544523809999899218320128") {
        message.channel.send("", {
            file: "./4.png" 
        });
        
    }

    if(message.content == "schizophrenic") {
        message.channel.send("", {
            file: "./9.png" 
        });
        
    }

    if(message.content == "food") {
        message.channel.send("", {
            file: "./6.png" 
        });
        
    }

    if(message.content == "lol") {
        message.channel.send("", {
            file: "./7.png" 
        });
        
    }

    if(message.content == "lmao") {
        message.channel.send("", {
            file: "./8.png" 
        });
        
    }

    if(message.content == "ceviha") {
        message.channel.send("", {
            file: "./10.png" 
        });
        
    }

    if(message.content == "glares") {
        message.channel.send("", {
            file: "./11.png" 
        });
        
    }

    if(message.content == "when you try to act smart but end up looking more retarded than before") {
        message.channel.send("", {
            file: "./12.png" 
        });
        
    }
});
