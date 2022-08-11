# A small example of writing a bot using a module

## Client and module initialization

```js
import {
    ReactionsRoles,
    EditMode
} from "discord-reactions-roles";

import {
    CreateReactionsRolesData,
    EditReactionsRolesData
} from "discord-reactions-roles/types/Data";

import {
    ApplicationCommandOptionType,
    ChannelType,
    Client,
    GatewayIntentBits,
    Guild,
    Partials,
    Role,
    TextChannel
} from "discord.js";

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
})

const reactionsRoles = new ReactionsRoles(client);

client.on("ready", async client => {
    return console.log(`${client.user.username} is ready!`);
})
```

## Client commands register
Use the following example function to register commands when your bot's `ready` event is triggered!

```js
function registerCommands(): void {
    client.application?.commands.set([
        {
            name: "create",
            description: "Allows you to create new reactions roles menu",

            options: [
                {
                    name: "channel",
                    description: "Guild Channel",

                    type: ApplicationCommandOptionType.Channel,
                    channelTypes: [ChannelType.GuildNews, ChannelType.GuildText],

                    required: true
                },

                {
                    name: "role",
                    description: "Guild Role",

                    type: ApplicationCommandOptionType.Role,
                    required: true
                },

                {
                    name: "emoji",
                    description: "Role Emoji",

                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },

        {
            name: "edit",
            description: "Allow you to edit exists reactions roles menus",

            options: [
                {
                    name: "mode",
                    description: "Editing mode",

                    type: ApplicationCommandOptionType.String,
                    required: true,

                    choices: [
                        {
                            name: "Add new data",
                            value: EditMode.ADD
                        },

                        {
                            name: "Remove old data",
                            value: EditMode.REMOVE
                        }
                    ]
                },

                {
                    name: "id",
                    description: "Message ID",

                    type: ApplicationCommandOptionType.String,
                    required: true
                },

                {
                    name: "role",
                    description: "Guild Role",

                    type: ApplicationCommandOptionType.Role,
                    required: true
                },

                {
                    name: "emoji",
                    description: "Role Emoji",

                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },

        {
            name: "remove",
            description: "Allows you to remove reactions roles menus from message id",

            options: [
                {
                    name: "id",
                    description: "Message ID",

                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ])
}
```

## Client commands handling

```js
client.on("interactionCreate", async interaction => {
    if(!interaction.inGuild()) return;
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.commandName;
    const commandGuild = interaction.guild as Guild;
})
```

## Client commands code

### Create command

```js
if(command === "create") {
    const channel = interaction.options.getChannel("channel", true) as TextChannel;
    const role = interaction.options.getRole("role", true) as Role;
    const emoji = interaction.options.getString("emoji", true);
        
    const options: CreateReactionsRolesData = {
        role: role,
        emoji: emoji
    }
        
    reactionsRoles.create(channel, options)

    .then(data => interaction.reply({ content: "Created!" }))
    .catch((error: Error) => console.log(error));
}
```

### Edit command

```js
if(command === "edit") {
    const mode = interaction.options.getString("mode", true) as EditMode;
    const id = interaction.options.getString("id", true);
    const role = interaction.options.getRole("role", true) as Role;
    const emoji = interaction.options.getString("emoji", true);

    const options: EditReactionsRolesData = {
        role: role,
        emoji: emoji
    }

    switch(mode) {
        case EditMode.ADD: {
            reactionsRoles.edit(commandGuild.id, id, EditMode.ADD, options)

            .then(data => interaction.reply({ content: "Edited!" }))
            .catch((error: Error) => console.log(error));

            break;
        }

        case EditMode.REMOVE: {
            reactionsRoles.edit(commandGuild.id, id, EditMode.REMOVE, options)

            .then(data => interaction.reply({ content: "Edited!" }))
            .catch((error: Error) => console.log(error));

            break;
        }
    }
}
```

### Remove command

```js
if(command === "remove") {
    const id = interaction.options.getString("id", true);

    reactionsRoles.remove(commandGuild.id, id)

    .then(data => interaction.reply({ content: "Removed!" }))
    .catch((error: Error) => console.log(error));
}
```

## Module events handling

### Ready event

```js
reactionsRoles.on("ready", async client => {
    return console.log(`ReactionsRoles [${reactionsRoles.version}] by ${reactionsRoles.author} is ready!`);
})
```

### RoleAdded event

```js
reactionsRoles.on("roleAdded", async (reaction, user, data) => {
    return console.log(`Added role with id '${data.roleID}' for user with id '${user?.id}'!`);
})
```

### RoleRemoved Event

```js
reactionsRoles.on("roleRemoved", async (reaction, user, data) => {
    return console.log(`Removed role with id '${data.roleID}' from user with id '${user?.id}'!`);
})
```