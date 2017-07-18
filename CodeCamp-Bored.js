'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 20,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'Are you still there?');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
