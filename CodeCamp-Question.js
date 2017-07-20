'use strict';
var helper = require('./Helpers.js');
var holidayData = require('./data/holidays');

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

        // 
        var qlc = question.toLowerCase();
        var response = "I'm not sure what you're asking for, try " +
                       "asking like this: 'Which holidays are in July?'"; 

        if (qlc.includes('holidays')) {
            if (qlc.includes(' in ')) {

                var month = helper.getLastWord(qlc).trim();
                month = month.replace('?', '');
                
                // check if the month exists...
                if (helper.searchArray(holidayData.months, month)) {                    
                    // month found, look for holidays
                    
                    response = getHolidaysInMonth(month);
                } else {
                    // month name not found, tell user they're crazy
                    response = "I'm sorry, but I don't recognize the month '" + month + "'.";
                }
            } else {
                // question was incomplete - tell user to try again
                response = "If you want to know which holidays occur in" + 
                           " a particular month, try 'Which holidays are in" +
                           " [month-name']?";
            }
        }

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

/**
 * Searches the Holiday Data Structure to find matching holidays
 * 
 * @param {string} Name of the month to search  
 * @return {string} list of holidays in the month
 */
function getHolidaysInMonth(month) {
    // reference the holidays array 
    var holidays = holidayData.holidays;

    // empty return value
    var ret = "";

    for (var x = 0; x < holidays.length; x++) {
        if (holidays[x].month == month) {
            if (ret != "") {
                ret = ret + ", ";
            }
           
            ret = ret + holidays[x].name;
        }
    }

    // set a message if no holidays were found
    if (ret == "") {
        // Make the first letter of the month uppercase
        // month[0] = month[0].toUpperCase();

        ret = "There are no holidays in the month of " + month + ".";
    } else { 
        ret = "The holidays in " + month +" are " + ret + "which one do you want to know about";
    }

    return ret;
}
