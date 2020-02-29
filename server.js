const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const got = require('got');
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(`Discoball help | ${client.guilds.size} server(s) | v1.0 (beta)`);
});

client.on("message", message => {
    if (message.author.bot) return; // ignore bots

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 150) {
        userInfo.level++
        userInfo.xp = 0
        message.channel.send(`${message.author.username} leveled up to level ` + userInfo.level)
    }
    if (message.content.startsWith ("Discoball xp")) {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/150");
        if(!member) return message.channel.sendEmbed(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/150")
        message.channel.sendEmbed(embed2)
    }
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
})


client.on("message", (message) => {
    if (message.content.startsWith ("Discoball ping")) {
      let ping = new Discord.RichEmbed()
      .addField("Pong!", new Date().getTime() - message.createdTimestamp + " ms");
  
  message.channel.send(ping);
    }
});

client.on('guildCreate', guild => {
  let defaultChannel = "";
  guild.channels.forEach((channel) => {
    if(channel.type == "text" && defaultChannel == "") {
      if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
})
  defaultChannel.send(`Hello DiscoBall here! Thanks for adding me to your server!`, {
  embed:{
      title: ':partying_face: Prefix',
      color: 0x2471a3, 
      description: "My prefix is Discoball. Type every command with Discoball <command>. For more help type Discoball help. You can see my commands below!",
      fields:[
          {
              name: ':question: Ask questions',
              value: 'how are you, do you <question>, have you <question>, how gay/annoying is <tag user>, are you <question>. Do not use the <>. More questions later!'
          },     
          {
              name: ':speech_balloon: Talk to me',
              value: 'good morning (no prefix needed), sing'
          },
          {
              name: ':tools: Utilities & Moderation',
              value: 'help, ping, info'
          },
          {
              name: ':smile: Fun',
              value: 'rate, dice, say, kill, meme, lottery, slots, battle, grade test, useless question, coinflip, xp'
          },
        ],
  
      footer: {
          text: 'DiscoBall is created and developed by Fermion#3927. Join the supportserver if you need help. v1.0'
      }
  }
})
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball help")) {
    let ping = new Discord.RichEmbed()
    .setDescription("DiscoBall help")
    .addField("Discoball help", "Get the help pages with commands")
    .addField("Discoball ping", "Ping the bot if it is responding")
    .addField("Discoball info", "Get info about the bot")
    .addField("Discoball sing", "Let Discoball sing a song for you")
    .addField("Discoball rate", "Get a rate for yourself or someone else")
    .addField("Discoball dice", "Dice game with DiscoBall")
    .addField("Discoball say", "Let DiscoBall say something for you. Note: your message will be deleted. It is at your own risk")
    .addField("Discoball kill <tag user>", "Kill someone with DiscoBall. Do not use the <>")
    .addField("Discoball meme", "Send random memes from Reddit")
    .addField("Discoball lottery", "Play a lottery game with DiscoBall")
    .addField("Discoball slots", "Play a slots game with DiscoBall")
    .addField("Discoball battle", "Battle again DiscoBall")
    .addField("Discoball grade test", "Let DiscoBall grade your next test")
    .addField("Discoball useless question", "Let DiscoBall ask you useless questions")
    .addField("Discoball coinflip", "Let DiscoBall ask you useless questions")
    .addField("Discoball xp", "Show how much XP you earned")
    .addField("Talk to the bot", "You can asking the bot questions. Type: Discoball how are you , Discoball do you <question>, Discoball have you <question>, Discoball how gay/annoying is <tag user>, Discoball are you <question>. For <question> you can type your question. For <tag user> you need to tag an user. Do not use the <>");

message.channel.send(ping);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Discoball create channel")) {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(3);
    const makeChannel = args.join(" ");
    message.guild.createChannel(makeChannel, 'text')
    if (!makeChannel) return message.channel.send(":x: Oh oh. Something went wrong. I can't make the channel. Please check my permissions or contact your server administrator");
    message.channel.send(`Channel **${makeChannel}** created successfully.`);
  }
});

client.on("message", function(message) {
  if (message.content.startsWith ("Discoball how gay is")) {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send(":x: Oh oh. Something went wrong. I can't find the user. Please try again.");
var answers = [ 
'1', 
'2',
'3',
'4', 
'5',
'6', 
'7',
'8',
'9',
'10',
'11',
'12',
'13',
'14',
'15',
'16',
'17',
'18',
'19',
'20',
'21',
'22',
'23',
'24',
'25',
'26',
'27',
'28',
'29',
'30',
'31',
'32',
'33',
'34',
'35',
'36',
'37',
'38',
'39',
'40',
'41',
'42',
'43',
'44',
'45',
'46',
'47',
'48',
'49',
'50',
'51',
'52',
'53',
'54',
'55',
'56',
'57',
'58',
'59',
'60',
'61',
'62',
'63',
'64',
'65',
'66',
'67',
'68',
'69',
'70',
'71',
'72',
'73',
'74',
'75',
'76',
'77',
'78',
'79',
'80',
'81',
'82',
'83',
'84',
'85',
'86',
'87',
'88',
'89',
'90',
'91',
'92',
'93',
'94',
'95',
'96',
'97',
'98',
'99',
'100',
'200',
];
let gay = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`:gay_pride_flag: ${kUser.user.username} is ${gay}% gay`);
}
});

client.on("message", function(message) {
  if (message.content.startsWith ("Discoball how annoying is")) {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send(":x: Oh oh. Something went wrong. I can't find the user. Please try again.");
var answers = [ 
'1', 
'2',
'3',
'4', 
'5',
'6', 
'7',
'8',
'9',
'10',
'11',
'12',
'13',
'14',
'15',
'16',
'17',
'18',
'19',
'20',
'21',
'22',
'23',
'24',
'25',
'26',
'27',
'28',
'29',
'30',
'31',
'32',
'33',
'34',
'35',
'36',
'37',
'38',
'39',
'40',
'41',
'42',
'43',
'44',
'45',
'46',
'47',
'48',
'49',
'50',
'51',
'52',
'53',
'54',
'55',
'56',
'57',
'58',
'59',
'60',
'61',
'62',
'63',
'64',
'65',
'66',
'67',
'68',
'69',
'70',
'71',
'72',
'73',
'74',
'75',
'76',
'77',
'78',
'79',
'80',
'81',
'82',
'83',
'84',
'85',
'86',
'87',
'88',
'89',
'90',
'91',
'92',
'93',
'94',
'95',
'96',
'97',
'98',
'99',
'100',
'200',
];
let anno = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${kUser.user.username} is ${anno}% annoying`);
}
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball how are you")) {
    var answers = [ 
      "I'm good. Thanks for asking",
      "I feel comfortable. Thanks for asking",
      "I feel pretty good. Thanks for asking",
      "I'm a bot. I don't have feelings, but still I feel good. Thanks for asking",
      "I have nothing to complain about. Thanks for asking",
      "I have nothing to complain about. Thanks for asking",
      "I don't feel well today. Thanks for asking",
      "I have bad feelings about today. Thanks for asking",
    ];

let feel = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${feel}`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball do you")) {
    var answers = [ 
      "No I don't",
      "Why are you asking me like that?",
      "Yes",
      "Maybe. Or maybe not",
      "Yes of course!",
      "Why do you want to know that?",
      "Sorry. Privacy",
      "No. I should never do that!",
      "I don't think so",
      "Maybe in the future",
      "I have done that once in the past",
      "It's secret",
      "Not yet",
      "You should know the answer",
      "I am not going to answer that question right now. Maybe another time",
    ];

let you = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${you}`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball have you")) {
    var answers = [ 
      "No I haven't",
      "Why are you asking me like that?",
      "Yes",
      "Maybe. Or maybe not",
      "Yes of course!",
      "Why do you want to know that?",
      "I don't think so",
      "No. I wouldn't have that",
      "Maybe in the future",
      "I have done that once in the past",
      "It's secret",
      "Not yet",
      "Maybe another bot knows the answer. I can't answer you",
      "You should know the answer",
      "I am not going to answer that question right now. Maybe another time",
    ];

let you = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${you}`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball can you")) {
    var answers = [ 
      "No I can't",
      "Why are you asking me like that?",
      "Yes",
      "Maybe. Or maybe not",
      "Yes of course!",
      "Why do you want to know that?",
      "Sorry. Privacy",
      "No. I could never do that",
      "I don't think so",
      "Not yet",
      "Maybe another bot knows the answer. I can't answer you",
      "You should know the answer",
      "I am not going to answer that question right now. Maybe another time",
    ];

let you = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${you}`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball are you")) {
    var answers = [ 
      "No I am not",
      "Why are you asking me like that?",
      "Yes I am",
      "Maybe. Or maybe not",
      "Yes of course!",
      "Why do you want to know that?",
      "Sorry. Privacy",
      "I don't think so",
      "Not yet",
      "Maybe another bot knows the answer. I can't answer you",
      "You should know the answer",
      "I am not going to answer that question right now. Maybe another time",
    ];

let you = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${you}`);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("Discoball rate")) {
  var answers = [
  'Becomes nothing',
  "It's not going to work like that",
  'Too low to know',  
  '-0,1',   
  '0,0',
	'0,1', 
  '0,2',
  '0,3',
  '0,4', 
  '0,5',
  '0,6', 
  '0,7',
  '0,8',
  '0,9',
  '1,0',
  '1,1',
  '1,2',
  '1,3',
  '1,4',
  '1,5',
  '1,6',
  '1,7',
  '1,8',
  '1,9',
  '2,0',
  '2,1',
  '2,2',
  '2,3',
  '2,4',
  '2,5',
  '2,6',
  '2,7',
  '2,8',
  '2,9',
  '3,0',
  '3,1',
  '3,2',
  '3,3',
  '3,4',
  '3,5',
  '3,6',
  '3,7',
  '3,8',
  '3,9',
  '4,0',
  '4,1',
  '4,2',
  '4,3',
  '4,4',
  '4,5',
  '4,6',
  '4,7',
  '4,8',
  '4,9',
  '5,0',
  '5,1',
  '5,2',
  '5,3',
  '5,4',
  '5,5',
  '5,6',
  '5,7',
  '5,8',
  '5,9',
  '6,0',
  '6,1',
  '6,2',
  '6,3',
  '6,4',
  '6,5',
  '6,6',
  '6,7',
  '6,8',
  '6,9',
  '7,0',
  '7,1',
  '7,2',
  '7,3',
  '7,4',
  '7,5',
  '7,6',
  '7,7',
  '7,8',
  '7,9',
  '8,0',
  '8,1',
  '8,2',
  '8,3',
  '8,4',
  '8,5',
  '8,6',
  '8,7',
  '8,8',
  '8,9',
  '9,0',
  '9,1',
  '9,2',
  '9,3',
  '9,4',
  '9,5',
  '9,6',
  '9,7',
  '9,8',
  '9,9',
  '10,0',
  ];
	  
let number = answers[Math.floor(Math.random() * answers.length)];	  
message.channel.send(`I give you as rate: ${number}. Don't judge me if it's low :flushed:`);
	  
  }
});

client.on("message", function(message) {
  if (message.content.startsWith ("Discoball dice")) {
var answers = [ 
'1', 
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
'10',
'11',
'12',
];

let dice = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`You rolled ${dice} :game_die:`);

}
});

client.on('message', (message) => {
  if (message.content.startsWith("Discoball grade test")) {
  var answers = [
  '0,0. How is it possible?',
	'0,1. How is it possible?', 
  '0,2. How is it possible?',
  '0,3. How is it possible?',
  '0,4. How is it possible?', 
  '0,5. How is it possible?',
  '0,6. How is it possible?', 
  '0,7. How is it possible?',
  '0,8. How is it possible?',
  '0,9. How is it possible?',
  '1,0. How is it possible?',
  '1,1. How is it possible?',
  '1,2. How is it possible?',
  '1,3. How is it possible?',
  '1,4. How is it possible?',
  '1,5. How is it possible?',
  '1,6. How is it possible?',
  '1,7. How is it possible?',
  '1,8. How is it possible?',
  '1,9. How is it possible?',
  '2,0. It is not going to be okay.',
  '2,1. It is not going to be okay.',
  '2,2. It is not going to be okay.',
  '2,3. It is not going to be okay.',
  '2,4. It is not going to be okay.',
  '2,5. It is not going to be okay.',
  '2,6. It is not going to be okay.',
  '2,7. It is not going to be okay.',
  '2,8. It is not going to be okay.',
  '2,9. It is not going to be okay.',
  '3,0. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,1. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,2. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,3. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,4. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,5. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,6. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,7. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,8. You will have to practice a lot to make something of it, otherwise it will not be.',
  '3,9. You will have to practice a lot to make something of it, otherwise it will not be.',
  '4,0. You are already moving in the right direction. You still have to practice a lot.',
  '4,1. You are already moving in the right direction. You still have to practice a lot.',
  '4,2. You are already moving in the right direction. You still have to practice a lot.',
  '4,3. You are already moving in the right direction. You still have to practice a lot.',
  '4,4. You are already moving in the right direction. You still have to practice a lot.',
  '4,5. You are already moving in the right direction. You still have to practice a lot.',
  '4,6. You are already moving in the right direction. You still have to practice a lot.',
  '4,7. You are already moving in the right direction. You still have to practice a lot.',
  '4,8. You are already moving in the right direction. You still have to practice a lot.',
  '4,9. You are already moving in the right direction. You still have to practice a lot.',
  '5,0. You are close for a sufficient.',
  '5,1. You are close for a sufficient.',
  '5,2. You are close for a sufficient.',
  '5,3. You are close for a sufficient.',
  '5,4. You are close for a sufficient.',
  '5,5. On the edge.',
  '5,6. On the edge.',
  '5,7. On the edge.',
  '5,8. On the edge.',
  '5,9. On the edge.',
  '6,0. It is a sufficient.',
  '6,1. It is a sufficient.',
  '6,2. It is a sufficient.',
  '6,3. It is a sufficient.',
  '6,4. It is a sufficient.',
  '6,5. You know the subject matter well enough.',
  '6,6. You know the subject matter well enough.',
  '6,7. You know the subject matter well enough.',
  '6,8. You know the subject matter well enough.',
  '6,9. You know the subject matter well enough.',
  '7,0. Well done.',
  '7,1. Well done.',
  '7,2. Well done.',
  '7,3. Well done.',
  '7,4. Well done.',
  '7,5. Well done.',
  '7,6. Well done.',
  '7,7. Well done.',
  '7,8. Well done.',
  '7,9. Well done.',
  '8,0. That is a high rating.',
  '8,1. That is a high rating.',
  '8,2. That is a high rating.',
  '8,3. That is a high rating.',
  '8,4. That is a high rating.',
  '8,5. That is a high rating.',
  '8,6. That is a high rating.',
  '8,7. That is a high rating.',
  '8,8. That is a high rating.',
  '8,9. That is a high rating.',
  '9,0. Great score.',
  '9,1. Great score.',
  '9,2. Great score.',
  '9,3. Great score.',
  '9,4. Great score.',
  '9,5. Almost a 10.',
  '9,6. Almost a 10.',
  '9,7. Almost a 10.',
  '9,8. Almost a 10.',
  '9,9. Almost a 10.',
  '10,0. Congratulations!',
  ];
	  
let number = answers[Math.floor(Math.random() * answers.length)];	  
message.channel.send(`I give you as grade for the next test: ${number}`);
	  
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Good morning everyone")) {
message.channel.send("Good morning! Have a nice day!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("good morning everyone")) {
message.channel.send("Good morning! Have a nice day!");
  }
});

client.on("message", (message) => {
  if (message.content.includes("666")) {
message.channel.send("Oh no. He calls the devil!");
  }
});

client.on("message", (message) => {
  if (message.content.includes("911")) {
message.channel.send("You need an ambulance? I am on my way! :ambulance: ");
  }
});

client.on("message", (message) => {
  if (message.content.includes("no u")) {
    if(message.author.bot) return;
message.channel.send("No u");
  }
});

client.on("message", (message) => {
  if (message.content.includes("No u")) {
    if(message.author.bot) return;
message.channel.send("No u");
  }
});

client.on("message", (message) => {
  if (message.content.includes("NO u")) {
    if(message.author.bot) return;
message.channel.send("No u");
  }
});

client.on("message", (message) => {
  if (message.content.includes("NO U")) {
    if(message.author.bot) return;
message.channel.send("No u");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Discoball info")) {
    let about = new Discord.RichEmbed()
    .setDescription("DiscoBall about")
    .setColor("#12b629")
    .addField("Name", "DiscoBall")
    .addField("Created by", "Fermion#3927")
    .addField("Created on", "January 27, 2020")
    .addField("Version", "v1.0")
    .addField("Servers running", `${client.guilds.size}`)
    .addField("Amount members", `${client.users.size}`);

message.channel.send(about);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball sing")) {
    var answers = [ 
      "I am practicing.",
      ":musical_note: Country roads, take me home. To the place I belong. West Virginia, mountain mama. Take me home, country roads. Song by: John Denver - Take Me Home Country Roads",
      "Sorry I have a cold. Maybe another time",
      ":musical_note: Ride it, ride it, come touch my soul. Ride it, ride, let me feel you. Ride it, turn the lights down low. Ride it, from head to toe. Ride it, ride it, touch my soul. Ride it, ride, let me feel you Song by: Regard - Ride it",
      ":musical_note: Seasons change and our love went cold. Feed the flame 'cause we can't let go. Run away, but we're running in circles. Run away, run away. I dare you to do something. I'm waiting on you again. So I don't take the blame. Run away, but we're running in circles. Run away, run away, run away. Song by: Post Malone - Circles",
      ":musical_note: Oh no, there you go, making me a liar. Got me begging you for more. Oh no, there I go, startin' up a fire. Oh no, no (oh no). Oh no, there you go, you're making me a liar. I kinda like it though. Oh no, there I go, startin' up a fire. Oh no, no (ooh). Song by: Camila Cabello - Liar",
      ":musical_note: Hey! Hey! Hey, hey, hey! Macho, macho man (macho man). I've got to be, a macho man. Macho, macho man. I've got to be a macho! Ow..... Macho, macho man. I've got to be, a macho man. Macho, macho man (yeah, yeah). I've got to be a macho! Song by: Village People - Macho Man",
      ":musical_note: This ain't nothin' but a summer jam. Bronze skin and cinnamon tans whoa. This ain't nothin' but a summer jam. We're gonna party as much as we can. Hey, oh, hey. Summer jam alright. Hey, oh, hey. Song by: The Underdog Project - Summer Jam", 
      ":musical_note: Oh don't you dare look back. Just keep your eyes on me. I said you're holding back. She said shut up and dance with me. This woman is my destiny. She said oh oh oh. Shut up and dance with me. Song by: Walk the Moon - Shut Up and Dance",
      ":musical_note: 'Cause baby tonight, D-J got us fallin' in love again. Yeah, baby tonight, D-J got us fallin' in love again. So dance, dance, Like it's the last, Last night of your life, life. Gon' get you right. 'Cause baby tonight,D-J got us fallin' in love again. Song by: Usher - DJ Got Us Fallin' In Love",
    ];

let sing = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${sing}`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Discoball say")) {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(2);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
}
}); 

client.on('message', (message) => {
  if (message.content.startsWith("Discoball kill")) {
    let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
   let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if (!kUser) return message.channel.send(":x: Oh oh. Something went wrong. I can't find the user. Please try again.");
  var answers = [ 
  `${kUser.user.username} tried to run away from ${message.author.username} but failed and died`, 
  `${message.author.username} killed ${kUser.user.username} with a knife that ${message.author.username} has bought yesterday. I thought ${message.author.username} bought it for fun but not I see`,
  `${kUser.user.username} was waiting for the bus. ${message.author.username} was driving a bus and driven against someone and ${kUser.user.username} died. Why was ${message.author.username} driving a bus without a bus driver licence?`,
  `${kUser.user.username} thought ${kUser.user.username} was smarter then ${message.author.username} but it was not. ${message.author.username} had a bodyguard. The bodyguard killed ${kUser.user.username}. I do not know why. Ask ${message.author.username}`,
  `Sorry, I do not want to kill someone. Try again later.`,
  `${message.author.username} gave ${kUser.user.username} a teleporter. ${kUser.user.username} did not know how it works and was teleported to Mars. Because there is no atmosphere, ${kUser.user.username} died.`,
  `${kUser.user.username} died. End.`,
  `${message.author.username} you thought I am going to kill someone? Okay I use my chainsaw. DiscoBall killed ${kUser.user.username} with a chainsaw.`,
  `${message.author.username} bought a hammer. He used the hammer to kill ${kUser.user.username}.`,
  `${message.author.username} was walking with his/her fiancé. ${kUser.user.username} was his/her ex. ${message.author.username} killed ${kUser.user.username} to secure his/her fiancé.`,
  `${kUser.user.username} died. There was a sign with "LOOK OUT. BIG HOLE'. ${kUser.user.username} have not seen that and has fallen in the big hole. What an idiot.`,
  `${message.author.username} has exploded the house in which ${kUser.user.username} lives. ${kUser.user.username} was at home and died while the house has exploded.`,
  `${kUser.user.username} was on a boat. The boat has sunk and ${kUser.user.username} drowned.`,
  `${kUser.user.username} and ${message.author.username} were driving a motorcycle. ${kUser.user.username} fell on the ground and did not survive it.`,
  `DiscoBall told ${kUser.user.username} how ${kUser.user.username} can survive the dead. ${kUser.user.username} did that and ${message.author.username} died. What did DiscoBall told him?`,
  `${message.author.username} threw a big stone to ${kUser.user.username}. ${kUser.user.username} did not survive it.`,
  `${message.author.username} called the police. 5 minutes later the police arrived and shot ${kUser.user.username} down.`,
  `${kUser.user.username} ran away from ${message.author.username} and did not die.`,
  `${kUser.user.username} was very annoyed about ${message.author.username} and his/her head has exploded.`,
  `Someone called the police. Police shot both down. Nobody wins now.`,
  `${message.author.username} made a bomb. ${message.author.username} threw the bomb to ${kUser.user.username} and ${kUser.user.username} died while the bomb has exploded.`,
  `${kUser.user.username} was hit by thunder. Sorry you are not Thor.`,
  `${message.author.username} called the Hulk. ${message.author.username} asked the Hulk for help. The Hulk smashed ${kUser.user.username}.`,
  `${kUser.user.username} has been killed by a bear.`,
  `${message.author.username} teleported ${kUser.user.username} to a war game. ${kUser.user.username} has been shot by a shotgun.`,
  `${kUser.user.username} watched too much porn and died.`,
  `${kUser.user.username} had the music to max volume. ${kUser.user.username}s head exploded by the volume of the music.`,
  `${message.author.username} killed ${kUser.user.username} with his car.`,
  `${kUser.user.username} was swimming in the sea. A shark attacked ${kUser.user.username} and ${kUser.user.username} died.`,
  `${kUser.user.username} was hit by a piano that had fallen from the sky. ${kUser.user.username} did not survive it.`,
  `${kUser.user.username} has been killed by a virus on Windows 10.`,
  `${kUser.user.username} asked ${message.author.username} if ${message.author.username} may borrow his/her horse. No problem said ${message.author.username}. The horse did not like ${kUser.user.username} and attacked him/her. ${kUser.user.username} did not survive it.`,
  `${kUser.user.username} fell in the water, fell off a waterfall and fell on a stone. That hurts a lot. ${kUser.user.username} got so much hits that ${kUser.user.username} did not survive it.`,
  `${kUser.user.username} was hit by an explosion that ${message.author.username} made.`,
  `${message.author.username} was just fishing at a river. ${kUser.user.username} was swimming in the river and hit by a ship.`,
  `${kUser.user.username} tried to kill ${message.author.username} with a sneaky face. Sorry but you failed my friend.`,
  `${kUser.user.username} was killed by a demon. Did you not know they exist? I believe they exist....`,
  `I have a story for you. Just not a normal story. I was walking with ${kUser.user.username} in the forest. I heard something. Some seconds later ${kUser.user.username} was killed by a monster. I did not see which kind of monster it was.`,
];
let kill2 = answers[Math.floor(Math.random() * answers.length)];
  message.channel.send(kill2); return;
}
});

client.on("message", function(message) {
  if (message.content.startsWith("Discoball lottery")) {
var answers = [ 
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'-5',
'0', 
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0', 
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0', 
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'0,01',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'1',
'2',
'2',
'2',
'2',
'2',
'2',
'2',
'2',
'5',
'5',
'5',
'5',
'5',
'5',
'5',
'5',
'10',
'15',
'20',
'25',
'30',
'50',
'75',
'100',
'150',
'200',
'250',
'300',
'500',
'750',
'1000',
'5000',
'10000',
'25000',
'50000',
'100000',
'250000',
'500000',
'1000000',
'5000000',
'10000000',
];
let randomAnswerPicker = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`You participated in a lottery. You won: €${randomAnswerPicker}. Were you lucky?`);
}
});

client.on("message", (message) => {
  if (message.content.startsWith ("Discoball battle")) {
    var answers = [ 
      "It's a draw. Score: 0-0",
      "It's a draw. Score: 1-1",
      "It's a draw. Score: 2-2",
      "It's a draw. Score: 3-3",
      "It's a draw. Score: 4-4",
      "You win! Score: 1-0",
      "You win! Score: 2-0",
      "You win, but it were close! Score: 2-1",
      "You win! Score: 3-0",
      "You win, but it were close! Score: 3-2",
      "You win! Score: 3-1",
      "You win! Score: 4-0",
      "You win! Score: 4-1",
      "You win! Score: 4-2",
      "You win, but it were close! Score: 4-3",
      "You lost. Score: 0-1",
      "You lost. Score: 0-2",
      "You lost. Score: 0-3",
      "You lost. Score: 1-3",
      "You lost, but you were close! Score: 1-2",
      "You lost, but you were close! Score: 2-3",
      "You lost. Score: 0-4",
      "You lost. Score: 1-4",
      "You lost. Score: 2-4",
      "You lost, but you were close! Score: 3-4",
    ];

let battle = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${battle}`);
  }
});

client.on("message", function(message) {
  if (message.content.startsWith ("Discoball useless question")) {
var answers = [ 
'How to read a book?',
'How to walk forward or backwards?',
'Why are traffic light the colors red, orange/yellow and green?',
'How can I have sex?',
'How to stop gangbang?',
'Is it possible to swim in lava?',
'What is a luigiboard?',
'What is a car?',
'What is a dog?',
'How long is a piece of string?',
'Why is the word dictionary in the dictionary?',
'Why is it you must wait until night to call it a day?',
'Can I have sex with 2 womens at the same time?',
'Why is it called lipstick if you can still move your lips?',
'Why is it called a "building" when it is already built?',
'Why is it that doctors call what they do "practice"?',
'Why does not Tarzan have a beard?',
'Why is a boxing ring square?',
'If Superman is so smart why does he wear his underpants over his trousers?',
'If swimming is good for your shape, then why do the whales look like the way they do?',
'Why do wise guy and wise man mean entirely different things?',
'Why does Goofy stand erect while Pluto remains on all fours? They are both dogs!',
'Why does it take 15 minutes to cook minute rice?',
'Why does the sun lighten our hair, but darken our skin?',
'If I save time, when do I get it back?',
'Why do they make scented toilet paper?',
'Why do they cotton swab the guys arm with rubbing alcohol before a lethal injection?',
'Why do Aliens abduct Humans if we are an inferior race?',
'If 4 out of 5 people suffer from diarrhea does the 5th one enjoy it?',
'Can a vegetarian eat animal crackers?',
'If you stay awake all night do you still have morning breath?',
'What is the speed of dark?',
'How fast is a car?',
'What happens if a black cat carrying a rabbit’s foot crosses your path?',
'If I die, can I still watching porn?',
'If I die, can I still watching anime?',
'What is Internet Explorer?',
'Why are black people black?',
'What kind of bees produce milk?',
'Does dreams comes out?',
'How were unicorns made?',
'How to stop eating my skin?',
'Can games bite my ears?',
'If evolution is true then why do pigs not have wings?',
'Am I out of shape if a turtle can outrun me?',
'What does the leaning tower of pizza taste like?',
'Is an egg a fruit or vegetable?',
'Is it possible to make toast in a microwave?',
'Who is the father or the internet?',
'Should my dog learn to drive?',
'Donuts business?',
'Why does not McDonalds sell hotdogs?',
'Is it still illegal to park next to a fire hydrant, even if your car is on fire?',
'Can you daydream at night?',
'What is a picture of a thousand words worth?',
'Why does quicksand work slowly?',
'Can animals commit suicide?',
'Why is vanilla ice cream white when vanilla extract is brown?',
'Why do people think that swaying their arm back and forth would change the direction of a bowling ball?',
'How can something be "new" and "improved"? if it is new, what was it improving on?',
'If money does not grow on trees then why do banks have branches?',
'Why does the Easter bunny carry eggs? Rabbits do not lay eggs.',
'Can a short person "talk down" to a taller person?',
'Since bread is square, then why is sandwich meat round?',
'Why are they called Jolly Ranchers? Who said that the ranchers were jolly?',
'What is the difference between normal ketchup and fancy ketchup?',
'Is a pessimists blood type B-negative?',
'If pro and con are opposites, would not the opposite of progress be congress?',
'If ghosts can walk through walls and glide down stairs, why do not they fall through the floor?',
'If a mime is arrested, do they tell him he has a right to talk?',
'If a bunch of cats jump on top of each other, is it still called a dog pile?',
'If God sneezes, what should you say?',
'Why is an alarm clock going “off” when it actually turns on?',
'Why is an electrical outlet called an outlet when you plug things into it? Shouldn’t it be called an inlet?',
'How come you press harder on a remote control when you know the battery is dead?',
];

let win = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(win)
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Discoball slots")) {

    var slots = [ 
      ":heart:",
      ":bomb:",
      ":mushroom:",
      ":star:",
      ":seven:",
    ];
      let result1 = Math.floor((Math.random() * slots.length));
      let result2 = Math.floor((Math.random() * slots.length));
      let result3 = Math.floor((Math.random() * slots.length));
    
      if (result1 === result2 && result1 === result3) {
        let embed = new Discord.RichEmbed()
           .setFooter('You won!')
           .setTitle(':slot_machine: Slots :slot_machine:')
           .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
           .setColor(0xF4E842)
        message.channel.send(embed);
    
      } else {
        let embed2 = new Discord.RichEmbed()
           .setFooter('You lost!')
           .setTitle(':slot_machine: Slots :slot_machine:')
           .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
           .setColor(0xF4E842)
        message.channel.send(embed2);
      }
    }
  });


  client.on("message", (message) => {
    if (message.content.startsWith("Discoball coinflip")) {
      var answers = [ 
        'It was tails',
        'It was heads',
        ];
        
        let win = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(win)
          }
        });

client.on("message", (message) => {
 if (message.content.startsWith("Discoball meme")) {
    const embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.addField(`${memeTitle}`, `[View thread](${memeUrl})`);
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
        console.log('Bot responded with: ' + memeImage);
    }).catch(console.error);
}
});


client.login("NjcxMDEwNTYyMTg3OTg0OTA4.XjMpLA.pDcJLGBNRHL3gE8NL-bQSDTMzq0");
