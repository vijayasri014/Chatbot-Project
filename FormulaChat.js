const TelegramBot = require("node-telegram-bot-api");
var Datastore = require("nedb");
var db = new Datastore({ filename: "datafile", autoload: true });
const token = "6281077190:AAGN3-1ADOflglPiWexy4IjTFDgEp-KouQ0";
const bot = new TelegramBot(token, {polling: true});
bot.on("message", function(msg){
db.find({name:msg.text}, function (err, docs){
for(var i = 0; i < docs.length; i++)
{
    console.log(docs[i]);
    bot.sendMessage(msg.chat.id, docs[i].formula);
    var found=true;
}
if(!found)
{
    bot.sendMessage(msg.chat.id,"Sorry not available In this ChatBot Only create for Maths Formulas Plz Enter valid information incase any quries plz Enter First letter should be Captital");
}
});

});