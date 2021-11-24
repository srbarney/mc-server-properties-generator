// Property Descriptions taken from: https://minecraft.fandom.com/wiki/Server.properties#Java_Edition
var globalMcProperties = [
    {
        "propertyName" : "allow-flight",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "<div>Allows users to use flight on the server while in Survival mode, if they have a mod that provides flight installed.<p>With allow-flight enabled, griefers may become more common, because it makes their work easier. In Creative mode, this has no effect.</p><dl><dd><b>false</b> - Flight is not allowed (players in air for at least 5 seconds get kicked).</dd><dd><b>true</b> - Flight is allowed, and used if the player has a fly mod installed.</dd></dl></div>"
    },
    {
        "propertyName" : "allow-nether",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Allows players to travel to the Nether.<dl><dd><b>false</b> - Nether portals do not work.</dd><dd><b>true</b> - The server allows portals to send players to the Nether.</dd></dl></div>"
    },
    {
        "propertyName" : "broadcast-console-to-ops",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "Send console command outputs to all online operators."
    },
    {
        "propertyName" : "broadcast-rcon-to-ops",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "Send rcon console command outputs to all online operators."
    },
    {
        "propertyName" : "difficulty",
        "propertyType" : "select",
        "options" : ["peaceful", "easy", "normal", "hard"],
        "defaultValue" : "easy",
        "description" : "Defines the difficulty (such as damage dealt by mobs and the way hunger and poison affects players) of the server. If a legacy difficulty number is specified, it is silently converted to a difficulty name."
    },
    {
        "propertyName" : "enable-command-block",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "Enables command blocks."
    },
    {
        "propertyName" : "enable-rcon",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "Enables remote access to the server console. It's not recommended to expose RCON to the Internet, because RCON protocol transfers everything without encryption. Everything (including RCON password) communicated between the RCON server and client can be leaked to someone listening in on your connection."
    },
    {
        "propertyName" : "enable-status",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "Makes the server appear as 'online' on the server list. If set to false, it will suppress replies from clients. This means it will appear as offline, but will still accept connections."
    },
    {
        "propertyName" : "enable-query",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "Enables GameSpy4 protocol server listener. Used to get information about server."
    },
    {
        "propertyName" : "enforce-whitelist",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "<div>Enforces the whitelist on the server.<p>When this option is enabled, users who are not present on the whitelist (if it's enabled) get kicked from the server after the server reloads the whitelist file.</p><dl><dd><b>false</b> - No user gets kicked if not on the whitelist.</dd><dd><b>true</b> - Online users not on the whitelist get kicked.</dd></dl></div>"
    },
    {
        "propertyName" : "entity-broadcast-range-percentage",
        "propertyType" : "range",
        "minValue" : 10,
        "maxValue" : 1000,
        "defaultValue" : 100,
        "step" : 10,
        "description" : "Controls how close entities need to be before being sent to clients. Higher values means they'll be rendered from farther away, potentially causing more lag. This is expressed the percentage of the default value. For example, setting to 50 will make it half as usual. This mimics the function on the client video settings (not unlike Render Distance, which the client can customize so long as it's under the server's setting)."
    },
    {
        "propertyName" : "force-gamemode",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "<div>Force players to join in the default game mode.<dl><dd><b>false</b> - Players join in the gamemode they left in.</dd><dd><b>true</b> - Players always join in the default gamemode.</dd></dl></div>"
    },
    {
        "propertyName" : "function-permission-level",
        "propertyType" : "range",
        "minValue" : 1,
        "maxValue" : 4,
        "defaultValue" : 2,
        "step" : 1,
        "description" : "Sets the default permission level for functions. See permission level for the details on the 4 levels."
    },
    {
        "propertyName" : "gamemode",
        "propertyType" : "select",
        "options" : ["survival", "creative", "adventure", "spectator"],
        "defaultValue" : "survival",
        "description" : "Defines the mode of gameplay. If a legacy gamemode number is specified, it is silently converted to a gamemode name."
    },
    {
        "propertyName" : "generate-structures",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Defines whether structures(such as villages) can be generated.<dl><dd><b>false</b> - Structures are not generated in new chunks.</dd><dd><b>true</b> - Structures are generated in new chunks.</dd></dl><p><b>Note:</b> <i>Dungeons still generate if this is set to false.</i></p></div>"
    },
    {
        "propertyName" : "generator-settings",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "The settings used to customize world generation. Follow its format and write the corresponding JSON string. Remember to escape all : with \\:."
    },
    {
        "propertyName" : "level-name",
        "propertyType" : "text",
        "defaultValue" : "world",
        "description" : "The 'level-name' value is used as the world name and its folder name. The player may also copy their saved game folder here, and change the name to the same as that folder's to load it instead. Characters such as ' (apostrophe) may need to be escaped by adding a backslash before them."
    },
    {
        "propertyName" : "level-seed",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "Sets a world seed for the player's world, as in Singleplayer. The world generates with a random seed if left blank. Some examples are: minecraft, 404, 1a2b3c."
    },
    {
        "propertyName" : "hardcore",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "If set to <b>true</b>, server difficulty is ignored and set to hard and players are set to spectator mode if they die."
    },
    {
        "propertyName" : "level-type",
        "propertyType" : "select",
        "options" : ["default", "flat", "largeBiomes", "amplified", "buffet", "default_1_1", "customized"],
        "defaultValue" : "default",
        "description" : "<div>Determines the type of map that is generated.<dl><dd><b>default</b> - Standard world with hills, valleys, water, etc.</dd><dd><b>flat</b> - A flat world with no features, can be modified with <b>generator-settings</b>.</dd><dd><b>largeBiomes</b> - Same as default but all biomes are larger.</dd><dd><b>amplified</b> - Same as default but world-generation height limit is increased.</dd><dd><b>buffet</b> - Only for 1.15 or before. Same as default unless <b>generator-settings</b> is set.</dd><dd><b>default_1_1</b> - Only for 1.15 or before. Same as default, but counted as a different world type.</dd><dd><b>customized</b> - Only for 1.15 or before. After 1.13, this value is no different than default, but in 1.12 and before, it could be used to create a completely custom world.</dd></dl></div>"
    },
    {
        "propertyName" : "max-build-height",
        "propertyType" : "range",
        "minValue" : 8,
        "maxValue" : 256,
        "defaultValue" : 256,
        "step" : 8,
        "description" : "The maximum height allowed for building. Terrain may still naturally generate above a low height limit. 256 is the maximum possible, it also has to be a multiple of 8."
    },
    {
        "propertyName" : "max-players",
        "propertyType" : "text",
        "defaultValue" : "20",
        "description" : "The maximum number of players that can play on the server at the same time."
    },
    {
        "propertyName" : "max-tick-time",
        "propertyType" : "range",
        "minValue" : 0,
        "maxValue" : 120000,
        "defaultValue" : 60000,
        "step" : 10000,
        "description" : "<div>The maximum number of milliseconds a single tick may take before the server watchdog stops the server with the message, <i>A single server tick took 60.00 seconds (should be max 0.05); Considering it to be crashed, server will forcibly shutdown.</i> Once this criterion is met, it calls System.exit(1).<dl><dd><b>-1</b> - disable watchdog entirely (this disable option was added in 14w32a)</dd></dl></div>"
    },
    {
        "propertyName" : "max-world-size",
        "propertyType" : "text",
        "defaultValue" : "29999984",
        "description" : "<div>This sets the maximum possible size in blocks, expressed as a radius, that the world border can obtain. Setting the world border bigger causes the commands to complete successfully but the actual border does not move past this block limit. Setting the max-world-size higher than the default doesn't appear to do anything.<p>Examples: </p><ul><li>Setting max-world-size to 1000 allows the player to have a 2000×2000 world border.</li><li>Setting max-world-size to 4000 gives the player an 8000×8000 world border.</li></ul></div>"
    },
    {
        "propertyName" : "motd",
        "propertyType" : "text",
        "defaultValue" : "A Minecraft Server",
        "description" : "This is the message that is displayed in the server list of the client, below the name. The MOTD supports color and formatting codes. The MOTD supports special characters. However, such characters must be converted to escaped Unicode form. If the MOTD is over 59 characters, the server list may report a communication error."
    },
    {
        "propertyName" : "network-compression-threshold",
        "propertyType" : "text",
        "defaultValue" : "256",
        "description" : "<div>By default it allows packets that are <i>n-1</i> bytes big to go normally, but a packet of <i>n</i> bytes or more gets compressed down. So, a lower number means more compression but compressing small amounts of bytes might actually end up with a larger result than what went in.<dl><dd><b>-1</b> - disable compression entirely</dd><dd><b>0</b> - compress everything</dd></dl><p><b>Note:</b> <i>The Ethernet spec requires that packets less than 64 bytes become padded to 64 bytes. Thus, setting a value lower than 64 may not be beneficial. It is also not recommended to exceed the MTU, typically 1500 bytes.</i></p></div>"
    },
    {
        "propertyName" : "online-mode",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "Server checks connecting players against Minecraft account database. Set this to false only if the player's server is not connected to the Internet. Hackers with fake accounts can connect if this is set to false! If minecraft.net is down or inaccessible, no players can connect if this is set to true. Setting this variable to off purposely is called 'cracking' a server, and servers that are present with online mode off are called 'cracked' servers, allowing players with unlicensed copies of Minecraft to join. true - Enabled. The server assumes it has an Internet connection and checks every connecting player. false - Disabled. The server does not attempt to check connecting players."
    },
    {
        "propertyName" : "op-permission-level",
        "propertyType" : "range",
        "minValue" : 1,
        "maxValue" : 4,
        "defaultValue" : 4,
        "step" : 1,
        "description" : "Sets the default permission level for ops when using /op."
    },
    {
        "propertyName" : "player-idle-timeout",
        "propertyType" : "range",
        "minValue" : 0,
        "maxValue" : 120,
        "defaultValue" : 0,
        "step" : 5,
        "description" : "If non-zero, players are kicked from the server if they are idle for more than that many minutes."
    },
    {
        "propertyName" : "prevent-proxy-connections",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "<div>If the ISP/AS sent from the server is different from the one from Mojang Studios' authentication server, the player is kicked<dl><dd><b>true</b> - Enabled. Server prevents users from using vpns or proxies.</dd><dd><b>false</b> - Disabled. The server doesn't prevent users from using vpns or proxies.</dd></dl></div>"
    },
    {
        "propertyName" : "pvp",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Enable PvP on the server. Players shooting themselves with arrows receive damage only if PvP is enabled.<dl><dd><b>true</b> - Players can kill each other.</dd><dd><b>false</b> - Players cannot kill other players (also known as <b>Player versus Environment</b> (<b>PvE</b>)).</dd></dl><p><b>Note:</b> <i>Indirect damage sources spawned by players (such as lava, fire, TNT and to some extent water, sand, and gravel) still deal damage to other players.</i></p></div>"
    },
    {
        "propertyName" : "query.port",
        "propertyType" : "text",
        "defaultValue" : "25565",
        "description" : "Sets the port for the query server (see <b>enable-query</b>)."
    },
    {
        "propertyName" : "rate-limit",
        "propertyType" : "range",
        "minValue" : 0,
        "maxValue" : 256,
        "defaultValue" : 0,
        "step" : 8,
        "description" : "Sets the maximum amount of packets a user can send before getting kicked. Setting to 0 disables this feature."
    },
    {
        "propertyName" : "rcon.password",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "Sets the password for RCON: a remote console protocol that can allow other applications to connect and interact with a Minecraft server over the internet."
    },
    {
        "propertyName" : "rcon.port",
        "propertyType" : "text",
        "defaultValue" : "25575",
        "description" : "Sets the RCON network port (see <b>enable-rcon</b>)."
    },
    {
        "propertyName" : "resource-pack",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "<div>Optional URI to a resource pack. The player may choose to use it.<p>Note that (in some versions before 1.15.2), the ':' and '=' characters need to be escaped with a backslash (\\), e.g. http\\://somedomain.com/somepack.zip?someparam\\=somevalue</p><p>The resource pack may not have a larger file size than 100 MiB (Before 1.15: 50 MiB (≈ 50.4 MB)). Note that download success or failure is logged by the client, and not by the server.</p></div>"
    },
    {
        "propertyName" : "resource-pack-prompt",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "Optional, adds a custom message to be shown on resource pack prompt when require-resource-pack is used. Expects chat component syntax, can contain multiple lines."
    },
    {
        "propertyName" : "resource-pack-sha1",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "<div>Optional SHA-1 digest of the resource pack, in lowercase hexadecimal. It is recommended to specify this, because it is used to verify the integrity of the resource pack.<p><b>Note:</b> If the resource pack is any different, a yellow message 'Invalid sha1 for resource-pack-sha1' appears in the console when the server starts. Due to the nature of hash functions, errors have a tiny probability of occurring, so this consequence has no effect.</p></div>"
    },
    {
        "propertyName" : "require-resource-pack",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "When this option is enabled (set to true), players will be prompted for a response and will be disconnected if they decline the required pack."
    },
    {
        "propertyName" : "server-ip",
        "propertyType" : "text",
        "defaultValue" : "",
        "description" : "The player should set this if they want the server to bind to a particular IP. It is strongly recommended that the player leaves server-ip blank. Set to blank, or the IP the player want their server to run (listen) on."
    },
    {
        "propertyName" : "server-port",
        "propertyType" : "text",
        "defaultValue" : "25565",
        "description" : "Changes the port the server is hosting (listening) on. This port must be forwarded if the server is hosted in a network using NAT (if the player has a home router/firewall)."
    },
    {
        "propertyName" : "snooper-enabled",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Sets whether the server sends snoop data regularly to http://snoop.minecraft.net.<dl><dd><b>false</b> - disable snooping.</dd><dd><b>true</b> - enable snooping.</dd></dl></div>"
    },
    {
        "propertyName" : "spawn-animals",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Determines if animals can spawn.<dl><dd><b>true</b> - Animals spawn as normal.</dd><dd><b>false</b> - Animals immediately vanish.</dd></dl><p><i>If the player has major lag, it is recommended to turn this off/set to false.</i></p></div>"
    },
    {
        "propertyName" : "spawn-monsters",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Determines if monsters can spawn.<dl><dd><b>true</b> - Enabled. Monsters appear at night and in the dark.</dd><dd><b>false</b> - Disabled. No monsters.</dd></dl><p>This setting has no effect if difficulty = 0 (peaceful). If difficulty is not = 0, a monster can still spawn from a spawner.</p><p><i>If the player has major lag, it is recommended to turn this off/set to false.</i></p></div>"
    },
    {
        "propertyName" : "spawn-npcs",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Determines whether villagers can spawn.<dl><dd><b>true</b> - Enabled. Villagers spawn.</dd><dd><b>false</b> - Disabled. No villagers.</dd></dl></div>"
    },
    {
        "propertyName" : "spawn-protection",
        "propertyType" : "range",
        "minValue" : 0,
        "maxValue" : 32,
        "defaultValue" : 16,
        "step" : 1,
        "description" : "Determines the side length of the square spawn protection area as 2x+1. Setting this to 0 disables the spawn protection. A value of 1 protects a 3×3 square centered on the spawn point. 2 protects 5×5, 3 protects 7×7, etc. This option is not generated on the first server start and appears when the first player joins. If there are no ops set on the server, the spawn protection is disabled automatically as well."
    },
    {
        "propertyName" : "sync-chunk-writes",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "Enables synchronous chunk writes."
    },
    {
        "propertyName" : "use-native-transport",
        "propertyType" : "checkbox",
        "defaultValue" : true,
        "description" : "<div>Linux server performance improvements: optimized packet sending/receiving on Linux<dl><dd><b>true</b> - Enabled. Enable Linux packet sending/receiving optimization</dd><dd><b>false</b> - Disabled. Disable Linux packet sending/receiving optimization</dd></dl></div>"
    },
    {
        "propertyName" : "view-distance",
        "propertyType" : "range",
        "minValue" : 3,
        "maxValue" : 32,
        "defaultValue" : 10,
        "step" : 1,
        "description" : "<div>Sets the amount of world data the server sends the client, measured in chunks in each direction of the player (radius, not diameter). It determines the server-side viewing distance.<p><i>10 is the default/recommended. If the player has major lag, this value is recommended to be reduced.</i></p></div>"
    },
    {
        "propertyName" : "white-list",
        "propertyType" : "checkbox",
        "defaultValue" : false,
        "description" : "<div>Enables a whitelist on the server.<p>With a whitelist enabled, users not on the whitelist cannot connect. Intended for private servers, such as those for real-life friends or strangers carefully selected via an application process, for example.</p><dl><dd><b>false</b> - No white list is used.</dd><dd><b>true</b> - The file whitelist.json is used to generate the white list.</dd></dl><p><i><b>Note:</b></i> <i>Ops are automatically whitelisted, and there is no need to add them to the whitelist.</i></p></div>"
    },
];