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
// January Holidays 
if (lc == ('New Year\'s day')) {
    rep = ('To relax and have fun, it is also a time of joy.');
}
if (lc == ('Martin Luther King jr\'s birthday')) {
    rep == ('He grew to become a social activist, who believed strongly in equality.');
}
 
 if (lc == ('National Pie day')) {
     rep == ('A day to cook and bake pies as well as to eat them.');
}
 // February Holidays
 if (lc == ('Bubble Gum day')) {
     rep == ('Kids bring 50 cents to school, to contribute to a good cause.');
}

if (lc == ('Superbowl Sunday')) {
    rep == ('People throw parties as well as watch the game.');
}

if (lc == ('National Freedom day')) {
    rep == ('Celebrates freedom from slavery, as well as America stands for a symbol of freedom.');
}     
        
        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
