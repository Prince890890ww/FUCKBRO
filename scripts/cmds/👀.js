module.exports = {
 config: {
   name: "👀",
   version: "1.0",
   author: "Siam",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "no prefix",
 },
  
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "👀") {
 return message.reply({
 body: "ha lado cus dey",
 attachment: await global.utils.getStreamFromURL("https://i.ibb.co/7rxyMn3/image.jpg")
 });
 }
 }
}