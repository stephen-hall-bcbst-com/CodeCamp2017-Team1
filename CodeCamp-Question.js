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
        // January response 
        if (lc.includes('holiday') && lc.includes('january')); {
        rep = 'January has lots of holidays most notably "New Years Day", "Martin Luther King JR\'s birthday", and "National Pie day." Which one do you want to know about. '; 
    }
        // February response 
        if (lc.includes('holiday') && lc.includes('february')) {
        rep = 'oh I know about February. It has "Bubble Gum Day", "SuperBowl Sunday", and "National Freedom Day." Which one do you want ot know about. ';
    } 
        // March response 
        if (lc.includes('holiday') && lc.includes('march')) {
        rep = 'I see you are interested in march, so here you go, "Peach Blossom Day", "Plant a Flower Day", and "St. Patricks Day." Which one do you want to know about.'; 
    }  
        // April response 
        if (lc.includes('holiday') && lc.includes('april')) {
        rep = 'So, you want to know about Apirl. "Apirl Fools Day", "National Peanut Butter and Jelly Day", and "Zoo lovers Day". Which one do you want to know about.';
    }
        // May response 
        if (lc.includes('holiday') && lc.includes('may')) { 
            rep = 'Hey your into May, there is "May Day", "Star Wars Day", and "Cinco De Mayo." Which one do you want to know about.';
    }
        // June response  
        if (lc.includes('holiday') && lc.includes('june')) {
            rep = 'You like june me too, there\'s "Best friend\'s Day", "Eat your Vegeatables Day", and "Father\'s Day." Which one do you want to know about.';
    }
        // July response 
        if (lc.includes('holiday') && lc.includes('july')) {
            rep = 'July is one of my favorite months. there\'s "4th of July", "National Blueberry Day", and "Embrace your Geekness Day". Which one do you want to know about.';
    }
       
       
        Slack.postMessageToChannel(channelName, rep );

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
