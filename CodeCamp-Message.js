'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
var lc = message.toLowerCase();
var rep = 'Sorry, I did\'t catch that.'

if (lc.includes('how') && lc.includes('are') && lc.includes('you'));{
    rep = 'I\'m doing as good as expected to be living in a computer' 
}


        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
