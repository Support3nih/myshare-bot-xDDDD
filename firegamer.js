const Discord = require("discord.js");
const FIREGAMER = new Discord.Client();

FIREGAMER.on('ready', () => {

console.log('iiFireGame');

FIREGAMER.user.setGame(`تعالو نتكلم`,'https://www.twitch.tv/TEST-Broadcast');

});

FIREGAMER.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('**هلا بيك حبي :heart:**');
  }
});

FIREGAMER.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم 
نورنا في السرفر يا حبيبي :heartpulse: 
                               [  https://discord.gg/dma2dDj  ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

FIREGAMER.login("NTA3MzQxNTYwMDczOTQ1MDk4.DrvSVA.rVBglTS08y6zAe4pSwK6-lMxPkM");
