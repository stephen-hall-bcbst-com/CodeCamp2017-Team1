'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
var lc = message.toLowerCase();

if (lc == "help") {
<<<<<<< HEAD
 Slack.postMessageToChannel(channelName, 'I can help you with Holdidays.');   
=======
 Slack.postMessageToChannel(channelName, 'I can help you with Holdidays. Just ask me about a month and I\'ll tell you what I know.');   
>>>>>>> 6565cf1226c1d267ef89ecea74770b43c07a18cf
}
if (lc.includes("help") && lc.includes("holidays")) {
Slack.postMessageToChannel(channelName, 'The Holidays are Halloween, Easter, Valentines, Christmas, New Years, as well as Presidants Day.');
};
if (lc== "") { 
} 

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
