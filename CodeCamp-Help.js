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

if (lc == "help"){
 Slack.postMessageToChannel(channelName, 'I can help you with Holdidays, and weather, as well as jokes.');   
}
if (lc == "help holidays"){
Slack.postMessageToChannel(channelName, 'The Holidays are Halloween, Easter, Valentines, Christmas, New Years, as well as Presidants Day.');
}
        

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
