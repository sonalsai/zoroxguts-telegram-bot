export const welcomeMessage = (msg) => {
  return ` Hi ${msg.from.first_name}

✨ *Welcome to ZoroxGuts Bot!* ✨

I can help you find:
🎬 Anime series  
📺 TV shows  
🎥 Movies  

Type a title or use a command to get started:

🔍 /search <title> – Search for any anime, movie, or series  
📈 /trending – Show trending anime and movies  
📚 /recommend – Get random recommendations  
❓ /help – See all commands

Let the hunt for your next favorite begin!
`;
};

export const stopMessage = `
👋 You've stopped interacting with ZoroxGuts Bot. Type /start anytime to come back!`;

export const defaultMessage = `
  🤖 I didn't understand that command`;

export const reactivateMessage = `
👋 You have stopped interacting with the bot. Type /start to reactivate!`;
