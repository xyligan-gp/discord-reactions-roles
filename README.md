<div align="center">
	<h1>Welcome to the 'discord-reactions-roles' page!</h1>
	<br />
	<p>
		<a href="https://drr.js.org"><img src="https://i.imgur.com/qpSadfv.gif" width="546" alt="DRR Main Image" /></a>
	</p>
	<br/>
	<p>
		<a href="https://discord.gg/zzbkvCcu2r"><img src="https://img.shields.io/discord/827221018879328298?color=5865F2&logo=discord&logoColor=white" alt="Support Server" /></a>
		<a href="https://www.npmjs.com/package/discord-reactions-roles"><img src="https://img.shields.io/npm/dt/discord-reactions-roles.png?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://www.npmjs.com/package/discord-reactions-roles"><img src="https://img.shields.io/npm/v/discord-reactions-roles.png?maxAge=3600" alt="NPM page" /></a>
	</p>
</div>

## About

**Discord Reactions Roles is a modern and powerful [Node.js](https://nodejs.org) module for creating a reaction role system in your Discord bot.**

* 👍 Simple & easy to use
* 😄 Beginner friendly
* 💿 Minimum load
* 📂 Multiple servers

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
$ npm install discord-reactions-roles
$ yarn add discord-reactions-roles
$ pnpm add discord-reactions-roles
```

## Example Usage

```js
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { ReactionsRoles } = require('discord-reactions-roles');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions
    ],

    partials: [
        Partials.Message,
        Partials.Reaction,
        Partials.User
    ]
});

client.reactions = new ReactionsRoles(client);

client.on('ready', async () => {
  	return console.log('Client is ready!');
})

client.reactions.on('ready', async () => {
	return console.log('ReactionsRoles is ready!');
})

client.login('YOUR_CLIENT_TOKEN_HERE');
```

## Links

* NPM: [Open](https://www.npmjs.com/package/discord-reactions-roles)
* GitHub: [Open](https://github.com/xyligan-gp/discord-reactions-roles)
* Documentation: [Open](https://drr.js.org)

* Module Developer: [xyligan](https://github.com/xyligan-gp)
* Developer Discord: [♡ xүℓ[ι]gαη4εg ♡#9457](https://discord.com/users/533347075463577640)
* Support Server: [Join xyligan development](https://discord.gg/zzbkvCcu2r)

<center><h1>♥ Thanks for using Discord Reactions Roles ♥</h1></center>