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
 Slack.postMessageToChannel(channelName, 'I can help you with the kill command and asking about the holidays. For kill command type "kill help". For holiday help type "holiday help"');   
}
    if (lc == "kill help") {
 Slack.postMessageToChannel(channelName, 'The kill command is "go to sleep"');    
}
    if (lc == "holiday help") {
 Slack.postMessageToChannel(channelName, 'If you are not getting any holidays try asking like this "Which holidays are in July?"');
}

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
