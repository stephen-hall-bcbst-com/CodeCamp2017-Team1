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
var rep = 'Sorry, I did\'t catch that.'; 

if (lc == ('New Year\'s day')) {
    rep = ('To relax and have fun, it is also a time of joy.');
}
if (lc == ('Martin Luther King jr\'s birthday')) {
    rep == ('He grew to become a social activist, who believed strongly in equality.');
}
 
 if (lc == ('National Pie day')) {
     rep == ('A day to cook and bake pies as well as to eat them.');
 }
 
        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
