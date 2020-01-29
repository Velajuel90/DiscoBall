const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(`Time to party in ${client.guilds.size} server(s)! | v1.0`);
  });

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
  //defaultChannel will be the channel object that it first finds the bot has permissions for
  defaultChannel.send(`Hello DiscoBall here! Thanks for adding me to your server!`, {
  embed:{
      title: ':partying_face: Prefix',
      color: 0x2471a3, 
      description: "My prefix is Discoball. I respond to all of them! Type every command with Discoball <command>. For more help type Discoball help. You can see my commands below!",
      fields:[
          {
              name: ':question: Ask questions',
              value: 'how are you, do you <question>, have you <question>, how gay is <tag user>. Do not use the <>. More questions later!'
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
              value: 'rate, dice'
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
    .addField("Discoball rate", "Get a rate for yourself or someone else")
    .addField("Discoball dice", "Dice game with DiscoBall")
    .addField("Discoball sing", "Let Discoball sing a song for you")
    .addField("Talk to the bot", "You can asking the bot questions. Type: DiscoBall how are you , DiscoBall do you <question>, DiscoBall have you <question>, DiscoBall how gay is <tag user>. For <question> you can type your question. For <tag user> you need to tag an user. Do not use the <>");

message.channel.send(ping);
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
message.channel.send(`:gay_pride_flag: ${gay}% gay`);
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
    ];

let you = answers[Math.floor(Math.random() * answers.length)];
message.channel.send(`${you}`);
  }
});

client.on('message', (message) => {
  if (message.content.startsWith("Discoball rate")) {
  var answers = [ 
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
message.channel.send(`I give you as rate ${number}. Don't judge me if it's low :flushed:`);
	  
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

client.login(process.env.BOT_TOKEN);
