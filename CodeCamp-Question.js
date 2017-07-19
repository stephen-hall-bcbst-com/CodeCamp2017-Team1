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
var rep = 'I don\'t know that, sorry';

    if (lc.includes('how') && lc.includes('are') && lc.includes('you')); {
    rep = 'I\'m doing as good as expected to be living in a computer'; 
}
    if (lc.includes('holiday') && lc.includes('january')); {
        rep = 'January has lots of holidays most notably "New Years Day", "Martin Luther King JR\'s birthday", and "National Pie day" '; 
    }
        Slack.postMessageToChannel(channelName, rep );

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
