const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263788375590";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_08_53_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrTzRsdnRBZmpDSy8xaFBFY3FtV1Uvb0ZuV2h2RFNmVk0xa1NpbnJ1WjNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5cksyS1dWaVNXNjFkb1JYTXZ6c2V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2N2ZkM2RlLWYzZTAtNDNmYS05Njc0LTU5NzVmNzkwNDgzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxNzAsXG4gICAgICAyMTcsXG4gICAgICAxMzQsXG4gICAgICAxODMsXG4gICAgICA2MCxcbiAgICAgIDY2LFxuICAgICAgNDIsXG4gICAgICAxNDAsXG4gICAgICAyMzEsXG4gICAgICAyNTAsXG4gICAgICA2NSxcbiAgICAgIDIyOSxcbiAgICAgIDYsXG4gICAgICA2MyxcbiAgICAgIDIxNSxcbiAgICAgIDcxLFxuICAgICAgMTIzLFxuICAgICAgNDQsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEyMSxcbiAgICAgIDE3MyxcbiAgICAgIDc1LFxuICAgICAgMTU4LFxuICAgICAgMzQsXG4gICAgICAxMzksXG4gICAgICAyMDMsXG4gICAgICAxMzgsXG4gICAgICA2MixcbiAgICAgIDIyNSxcbiAgICAgIDEyOCxcbiAgICAgIDEzNixcbiAgICAgIDExMyxcbiAgICAgIDUyLFxuICAgICAgNDEsXG4gICAgICAyNTUsXG4gICAgICA3MSxcbiAgICAgIDE0NyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0QzhUUFFQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1Nzk3MTY5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExOTc0NTg2OTY2MjcxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJQdUpZR0VQRzhzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUWnNPQkV6RE90eC9sODI0YWRYVWNuaVZFQTh2bGtDT0svMmE4MXhWWFIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNCUjhnbE5HeHJ4RlYrNG5id3pWRCtLMmFyS0ZFZlphVnJ0aG9SUDkzSkNtUTJuZGQyeWVPSGp1cHVYOHNNa1EweENLQ2lLUVNlWUt3dThCRkQxbENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1EQTNVN21lWkNuRG5Sa005UHhqbVd1eEFObE42aGFSRGd3WTdhdy9iREJSRG5WWGE3OUV3bjV3RXAwdXlTWEtzeVdqUXZJQTR5cEF0cjhrOWgyU2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNTc5NzE2OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTg4Nzg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
