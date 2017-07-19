'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
var lc = question.toLowerCase();
var rep = '';

if (lc.includes('weather')) {
     rep = 'I don\'t know, sorry I don\'t get out much';
}
if (lc.includes('how') && lc.includes('are') && lc.includes('you'));{
    rep = 'I\'m doing as good as expected to be living in a computer'; 
}

        Slack.postMessageToChannel(channelName, rep );

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
