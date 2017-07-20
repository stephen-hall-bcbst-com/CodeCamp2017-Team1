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
var rep = 'Sorry, I did\'t catch that. Try asking for help.'; 
// January Holidays 
if (lc == ('new years day')) {
    rep = ('A day to relax and have fun, it is also a time of joy.');
}
if (lc == ('martin luther king jr\'s birthday')) {
    rep = ('He grew to become a social activist, who believed strongly in equality.');
}

 if (lc == ('national pie day')) {
     rep = ('A day to cook and bake pies as well as to eat them.');
}
 // February Holidays
 if (lc == ('bubble gum day')) {
     rep = ('Kids bring 50 cents to school, to contribute to a good cause allowing them to chew gum for the day.');
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
    rep = ('A day to celebrate the huge science fiction series.'); 
}

if (lc == ('cinco de mayo')) {
    rep = ('On May 5th, 1862, the Mexican army defeated the French army at the battle of Puebla.');
}

// June Holidays 

if (lc == ('best friend\'s day')) {
    rep = ('A day to enjoy and appreciate your best friend.');
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
    rep = ('Embrace your inner geek by hopping on your computer.');
}     

// August Holidays

if (lc == ('national s\'mores day')) {
    rep = ('Relax by the campfire, and eat a s\'more to join the fun.');
}

if (lc == ('vj day')) {
        rep = ('The celebration of the end of World War Two.');
}

if (lc == ('women\'s equality day')) {
    rep = ('On this day women had the right.');
}

// September Holidays 

if (lc == ('national grandparents day')) {
    rep = ('This day is to honor and remember the fun times you had with your grandparents.');
}

if (lc == ('read a book day')) {
    rep = ('Relax with a good book, and enjoy reading for a while.');
}

if (lc == ('911 remembrance day')) {
    rep = ('Remember those who passed away as well as those who lost a loved one.');
}

// October Holidays 

if (lc == ('national pasta day')) {
    rep = ('Celebrate by eating some pasta.');
}

if (lc == ('united nations day')) {
    rep = ('To recognize, the people who serve and help the environment.');
}

if (lc == ('halloween')) {
    rep = ('To dress up as anything you want, you also eat candy.');
}



       Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
