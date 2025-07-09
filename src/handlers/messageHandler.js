import {
  welcomeMessage,
  stopMessage,
  defaultMessage,
  reactivateMessage,
} from "../constants/messages.js";

const stoppedUsers = new Set();

export const handleMessage = (bot, msg) => {
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
};
