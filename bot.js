import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import {
  defaultMessage,
  reactivateMessage,
  stopMessage,
  welcomeMessage,
} from "./constants/messages.js";
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const stoppedUsers = new Set();

console.log("=============================================");
console.log("=============================================");
console.log("================ BOT STARTED ================");
console.log("=============================================");
console.log("===============[ ZORO X GUTS ]===============");
console.log("=============================================");
console.log("=============================================");

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (stoppedUsers.has(chatId) && messageText !== "/start") {
    return bot.sendMessage(chatId, reactivateMessage);
  }

  switch (messageText) {
    case "/start":
      stoppedUsers.delete(chatId); // Reactivate user
      bot.sendMessage(chatId, welcomeMessage(msg));
      break;
    case "/stop":
      bot.sendMessage(chatId, stopMessage);
      stoppedUsers.add(chatId); // Deactivate user
      break;
    default:
      bot.sendMessage(chatId, defaultMessage);
      break;
  }
});
