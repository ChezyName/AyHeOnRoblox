const dotenv = require("dotenv").config();
const discordjs = require("discord.js");
const SnitchID = process.env.SNITCH_CHANNEL_ID;
const BotToken = process.env.DISC_BOT_TOKEN;
const DelayMin = process.env.DELAY_PER_MSG;
const UserRBXID = process.env.RBX_USER_ID;
const UserDiscID = process.env.DISC_USER_NAME;
const LoopSpeed = process.env.LOOP_SPEED;
const UsersName = process.env.USERS_NAME;

var cDelay = 0;

if(SnitchID == "") console.error("Channel ID Invalid");
if(BotToken == "") console.error("Bot ID Invalid");

const client = new discordjs.Client({ intents: [discordjs.GatewayIntentBits.Guilds,discordjs.GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(mainLoop, LoopSpeed);
});  

client.login(BotToken);

async function mainLoop(){
    cDelay -= LoopSpeed;
    (async () => {
        const rawResponse = await fetch('https://presence.roblox.com/v1/presence/last-online', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({userIds: [UserRBXID]})
        });
        const content = await rawResponse.json();
      
        if(content.lastOnlineTimestamps != null){
            let lastOnline = new Date(content.lastOnlineTimestamps[0].lastOnline);
            if(lastOnline.getUTCDay() == new Date().getUTCDay() && lastOnline.getUTCHours() == new Date().getUTCHours() && lastOnline.getUTCMinutes() == new Date().getUTCMinutes() && cDelay <= 0){
                cDelay = DelayMin * 60000
                msg = process.env.CUSTOM_MSG_BEFORE_NAME + UserDiscID + process.env.CUSTOM_MSG_AFTER_NAME;
                client.channels.cache.get(SnitchID).send(msg);
                console.log("Sent Message...");
                console.log(`Waiting ${DelayMin} mins Before Next Message.`);
            }
        }
      })();
}