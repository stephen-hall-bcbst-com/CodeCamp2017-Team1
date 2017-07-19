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



        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
