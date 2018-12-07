# OSU-Bot
# This Discord Bot does 3 things:

# 1
  If a message is sent in a text channel that the bot is a member of, it will tag the user that sent the message and copy the message they   just sent, replacing all 'M's, lowercase or uppercase, with the ❌ emoji.
  
# 2
  If a message is sent in a text channel that the bot is a member of that contains the string 'OSU' the bot will send the following         message:
    <br/>Injured defensive end Nick Bosa yelled out, "There you go! There you go." Quarterback Dwayne Haskins gave a look of pleasant               surprise. Wide Receiver Paris Campbell yelled out, "We got an [expletive] squad now." And before Meyer hit the locker room door,           former OSU great Eddie George hugged him and said, "Y'all look so different."
    
# 3
  If a message is sent in a text channel that the bot is a member of that contains the string 'Michigan', uppercase or lowercase, the bot   will send the following message:
    <br/>Overheard in ❌ichigan locker room after Game 7:
    <br/>"He got me," Harbaugh said of Meyer's coaching against him. "That f\*\*\*ing Meyer boomed me."
    <br/>Harbaugh added, "He’s so good," repeating it four times.
    <br/>Harbaugh then said he wanted to add Meyer to the list of coaches that would cost him his job.
    
<br/>The bot will not do any of the scenarios listed above if the message contains a link (containing www or .com for simplicity).

In order to get it to function the user must create an auth.json file containing the Discord Bot Token. The auth.json file should be in the same folder as the bot.js file. Alternatively, OSU-Bot can be added to a discord server by following this link and adding it:
<br/>https://discordapp.com/oauth2/authorize?client_id=515927888596303912&scope=bot&permissions=75840

<br/>However, I can't promise that the bot will be online too often.
