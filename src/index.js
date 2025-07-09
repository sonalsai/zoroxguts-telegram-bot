import TelegramBot from "node-telegram-bot-api";
import { token } from "../config/config.js";
import { handleMessage } from "./handlers/messageHandler.js";

const bot = new TelegramBot(token, { polling: true });

console.log("=============================================");
console.log("=============================================");
console.log("================ BOT STARTED ================");
console.log("=============================================");
console.log("===============[ ZORO X GUTS ]===============");
console.log("=============================================");
console.log("=============================================");

bot.on("message", (msg) => {
  handleMessage(bot, msg);
});
