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
 Slack.postMessageToChannel(channelName, 'I can help you with Holdidays. Just ask me about a month and I\'ll tell you what I know.');   
}
    
    
    if (lc== "") { 
} 

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
