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

        Slack.postMessageToChannel(channel, 'Hi, I\'m Penny the holiday bot. I can help you learn more about holidays. Just ask me a month and I\'ll tell you what I know, for more infomation type "help".');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
