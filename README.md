# rolechecker
Simple bot to return list of users with a specified discord role
## setup
Requires `config.json` file to be created in the top level directory with the form:
```
{
    "token": "token-value",
    "clientId": "bot-application-id",
    "guildId": "guild-id"
}
```
Requires `discord.js`, `node:fs`, and `node:path`.  
Intents: `GatewayIntentBits.Guilds`, `GatewayIntentBits.GuildMembers`
To run:
```
node deploy-command.js
node index.js
```
## Notes
The bot runs by making the Discord API call for the query, generating a CSV file/saving it locally, then sending that file as an emphemeral message to the bot caller.  The bot therefore needs access to a writable directory on its host system.  Currently it is set to a default of `/tmp/${filename}`, where `filename` is a generated filename based on the server name the bot is run on and the role being searched.  To edit this, [change the filepath variable in checkrole.js](https://github.com/jasercion/rolechecker/blob/1037cb5e7583c64343666e643518034b7d2c063e/commands/lookup/checkrole.js#L18).  
