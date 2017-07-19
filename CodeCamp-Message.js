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

// March Holidays 

if (lc == ('Peach Blossom day')) {
    rep == ('It is a day to celebrate girls, and women.');
}  

if (lc == ('Plant a Flower day')) {
    rep == ('A day to garden and plant a flower.');
}               

if (lc == ('St. Patricks day')) {
    rep == ('In honor of Patron Saint of Ireland, who brought Christianity to the Emerald Isles.');
}

// April Holidays 

if (lc == ('April Fools day')) {
    rep == ('A day to have fun, and prank your friends and family.');
}   

if (lc == ('National Peanut Butter and Jelly day')) {
    rep == ('Many kids and adults love this famous sandwich.');
}   

if (lc == ('Zoo Lovers day')) {
    rep == ('A day to visit zoos, and enjoy animals.'); 
}     

// May Holidays

if (lc == ('May day')) {
    rep == ('The celebration of spring coming into summer.');
}

if (lc == ('Star Wars day')) {
    rep == ('To celebrate the huge science fiction series.'); 
}

if (lc == ('Cinco De Mayo')) {
    rep == ('On May 5th, 1862, the Mexican army defeated the French army at the battle of Puebla.');
}

// June Holidays 




        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
