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
if (lc == ('new year\'s day')) {
    rep = ('To relax and have fun, it is also a time of joy.');
}
if (lc == ('martin luther king jr\'s birthday')) {
    rep = ('He grew to become a social activist, who believed strongly in equality.');
}

 if (lc == ('national pie day')) {
     rep = ('A day to cook and bake pies as well as to eat them.');
}
 // February Holidays
 if (lc == ('bubble gum day')) {
     rep = ('Kids bring 50 cents to school, to contribute to a good cause.');
}

if (lc == ('superbowl sunday')) {
    rep = ('People throw parties as well as watch the game.');
}

if (lc == ('national freedom day')) {
    rep = ('Celebrates freedom from slavery, as well as America stands for a symbol of freedom.');
}     

// March Holidays 

if (lc == ('peach blossom day')) {
    rep = ('It is a day to celebrate girls, and women.');
}  

if (lc == ('plant a flower day')) {
    rep = ('A day to garden and plant a flower.');
}               

if (lc == ('st. patricks day')) {
    rep = ('In honor of Patron Saint of Ireland, who brought Christianity to the Emerald Isles.');
}

// April Holidays 

if (lc == ('april fools day')) {
    rep = ('A day to have fun, and prank your friends and family.');
}   

if (lc == ('national peanut butter and jelly day')) {
    rep = ('Many kids and adults love this famous sandwich.');
}   

if (lc == ('zoo overs day')) {
    rep = ('A day to visit zoos, and enjoy animals.'); 
}     

// May Holidays

if (lc == ('may day')) {
    rep = ('The celebration of spring coming into summer.');
}

if (lc == ('star wars day')) {
    rep = ('To celebrate the huge science fiction series.'); 
}

if (lc == ('cinco de mayo')) {
    rep = ('On May 5th, 1862, the Mexican army defeated the French army at the battle of Puebla.');
}

// June Holidays 

if (lc == ('best friend\'s day')) {
    rep = ('To enjoy and appreciate your best friend.');
}

if (lc == ('eat your vegetables day')) {
    rep = ('It was created to promote a healthier diet.');
} 

if (lc == ('father\'s day')) {
    rep = ('Appreciate all the dad\'s');
}

// July Holidays 

if (lc == ('4th of july')) {
    rep = ('It is the birthday of our nation, we celebrate this because of the freedom that we gained.');
} 

if (lc == ('national blueberry day')) {
    rep = ('Blueberries are one of the most healthiest fruits you can eat. Join the celebration by eating some blueberries.');
}     

if (lc == ('embrace your geekness day')) {
    rep == ('Embrace your inner geek by hopping on your computer.');
}     
        
        Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
