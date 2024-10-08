const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_18_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitCVlRTQjVGRGd6OW9rdEw3RERrU2lSZ2oxMmE4Ym5NNFdncVI4bnZvd0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxsZjJJTllhUnZhcEotT01vZ001ZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjYxYTUwNDUtMzI3YS00YTViLWI5MWMtZDQ3YTJiNjQ5MDRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTcwLFxuICAgICAgMTg0LFxuICAgICAgMjQ0LFxuICAgICAgNDMsXG4gICAgICAyOSxcbiAgICAgIDU1LFxuICAgICAgOTksXG4gICAgICAxMTMsXG4gICAgICA1MixcbiAgICAgIDE1OSxcbiAgICAgIDQxLFxuICAgICAgMTE5LFxuICAgICAgMTc1LFxuICAgICAgMjI2LFxuICAgICAgMTA1LFxuICAgICAgMTk3LFxuICAgICAgMTA0LFxuICAgICAgMTQ5LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDUwLFxuICAgICAgMjMwLFxuICAgICAgNzYsXG4gICAgICAyMTQsXG4gICAgICAxMzgsXG4gICAgICAxNDUsXG4gICAgICAyNDEsXG4gICAgICAyNDUsXG4gICAgICAxNTUsXG4gICAgICA5MixcbiAgICAgIDM0LFxuICAgICAgMTMyLFxuICAgICAgMTczLFxuICAgICAgMTkyLFxuICAgICAgMzIsXG4gICAgICA2MCxcbiAgICAgIDE3MyxcbiAgICAgIDIwMSxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJONUFWS05YXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1NTY2OTY4ODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ0OTUxMjUzOTI2MDk1OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzaDdOTUhFTmlObExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU05SS24yM0tnR0syV0Foc1BQTkVUSUJxWjhjZGZDSXgrYjZkZU56WVprUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBTy9MUlN4UkpoRDNZcU1UVEdONS9rdDR3VklmYWZ0MzZsTW5FUjRPWmNReHg4UHN2K3BXcDJtYkVWTXl6K0RUOHBmSGZRcW55eGdJeXN4QU0weWpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGM2pXMFBoRHJtVUIrdUxDUnYzdjZWcGhmM2lFaTczaTZPQ3ppQTdZcnJnQ1EwRjBaK0pIWHJRMll2blN2UmQ0VnVGazZNcjRERTgrYnJycXZmWDVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NTY2OTY4ODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzgyNjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFdkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEV2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrbGVZNVpNWUxHckZ0UHZmL3VLNVBKSHUxbnY0Zzl0bnFyU281TXJ3WCswPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTQ4OTM3NTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc5NjMyMTAyMDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
