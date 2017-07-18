'use strict';

module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, "I'm back! Hope you are having a great day.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
