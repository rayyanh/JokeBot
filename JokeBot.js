const Discord = require("discord.js");
const client = new Discord.Client();
var jokes = ["Joke1", "Joke2", "Joke3"];

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.content.startsWith("give me a joke")) {
        //var value = jOkE();
        message.channel.send(jOkE());
    }
});

client.login("NDQ5NjkyOTk4OTg5NjQzNzc2.DeodEQ.REgEdOYqRaPB6yMxYF_eiWSADeU");

// Set the prefix
const prefix = "~";
client.on("message", (message) => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "joke")) {
        message.channel.send("potato!");
    } else
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.send("bar!");
    }
});

function jOkE() {
    var test = "Why did the scarecrow win the Nobel Prize? A: He was out standing in his field.";
    var go = "YoUr LiFe";
    var here = "Omar and his tacos";
    var was = "What would George Washington do if he were alive today? Scream and scratch at the top of his coffin.";
    var Rayyan = "Where is the worst place to play hide and seek in a hospital ? In the I.C.U.";
    var a = "just shut up already";
    var b = "wake up your idea";
    var c = "Get your lazy body off that bed";
    var d = "Your mama so fat, she needs two watches for the different time zones";
    var values = [test, go, here, was, Rayyan, a, b, c, d];
    valueToUse = values[Math.floor(Math.random() * values.length)];
    // do something with the selected value
    return valueToUse;
}