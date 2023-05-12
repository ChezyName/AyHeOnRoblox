# Discord-x-Roblox-Snitching
A Discord Bot That Tells You When A User Is On Roblox!

Imagine you have a friend who likes to be on Roblox but ever joins VC (Voice Chat),
You can now use this Discord Bot to **EXPOSE THEM!**

With This New Discord Bot, You Can Make Sure They Get **SHAMMED** Into Joining VC With You!

## Setting Up .env
------

Once you download this bot / the entire app, make sure you create a file named `.env` and inside there copy everything here

``` .env
DISC_USER_NAME=
RBX_USER_ID=

CUSTOM_MSG_BEFORE_NAME=
CUSTOM_MSG_AFTER_NAME=

DISC_BOT_TOKEN=

SNITCH_CHANNEL_ID=
DELAY_PER_MSG=

LOOP_SPEED = 
```

Here you can add anything that you want to change without changing the code.

**WHAT EACH ITEM MEANS**

``` .env
DISC_USER_NAME= The Persons Name In Discord
RBX_USER_ID= Their Roblox User ID

CUSTOM_MSG_BEFORE_NAME= A MSG That Displays BEFORE Their Username When Caught
CUSTOM_MSG_AFTER_NAME= A  MSG That Displays AFTER Their Username When Caught

DISC_BOT_TOKEN= The Discord Token For The BOT

SNITCH_CHANNEL_ID= What Channel Should The Message Be Displayed In
DELAY_PER_MSG= How Long Till The Next Message (MINS)

LOOP_SPEED = How Long TIll The Next Update (MS)
```

## How It Works?
------

Every 'tick' the bot requests the user's presence from roblox via this link `https://presence.roblox.com/v1/presence/last-online`
It also posts the user's id along with it. Then if the date is the same as todays date (UTC), we just send a message and wait x mins before we do it again.