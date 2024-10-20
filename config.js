const moment = require('./src/utils/moment.js')

module.exports = {
    SESSION_NAME: "cihuy",
    STORAGE_PATH: __dirname + "/storage",
    STORAGE_SESSION: __dirname + "/storage/session",
    STORAGE_DB: __dirname + "/storage/databases",

    /*
        #Database Schema
        Default Schema and value database.

        Important For Bot Schema:
        - You can change the bot settings via commands, 
          or you can make changes manually via the configuration with the condition that after making changes you need to run the /reset-db-bot command.
    */
    DATABASE_SCHEMA: {
        bot: {
            mode: 'public',
            lang: 'id',
            prefix: ['/', '.', '!'],
            owners: {
                '6285758154177': 'zamzam',
                // '628xxx': 'Name',
            },
            exif: {
                pack: "BOT 6285731618404",
                author: "Owner zamta",
            },
            created_at: moment(),
            updated_at: moment(),
        },
        user: {
            plan: "free", // free or pro
            plan_expire: false, // false = unlimited
            limit: 20, // false -> unlimited
            exp: 0,
            coin: 0,
            blacklist: false, // false = not in blacklist, true = in blacklist permanently, timestamp = in blacklist for some time
            blacklist_reason: '', // reason for blacklist
            updated_at: moment(), // update every time using bot
            created_at: moment(), // create time
        },
        group: {
            mode: 'admin-only', // admin-only or all
            antilink: false,
            nsfw: false,
            welcome: false,
            welcome_message: null,
            welcome_background: null,
            timeouts: {},
            updated_at: moment(),
            created_at: moment(),
        },
    },
}
