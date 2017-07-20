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
    rep = ('A day to relax and have fun, it is also a time of joy. Date: January 1st');
}
if (lc == ('martin luther king jr\'s birthday')) {
    rep = ('He grew to become a social activist, who believed strongly in equality. Date: January 16th');
}

 if (lc == ('national pie day')) {
     rep = ('A day to cook and bake pies as well as to eat them. Date: January 23rd');
}
 // February Holidays
 if (lc == ('bubble gum day')) {
     rep = ('Kids bring 50 cents to school, to contribute to a good cause allowing them to chew gum for the day. Date: February 3rd ');
}

if (lc == ('superbowl sunday')) {
    rep = ('People throw parties as well as watch the game. Date: February 5th');
}

if (lc == ('national freedom day')) {
    rep = ('Celebrates freedom from slavery, as well as America stands for a symbol of freedom. Date: February 5th');
}     

// March Holidays 

if (lc == ('peach blossom day')) {
    rep = ('It is a day to celebrate girls, and women. Date: March 3rd');
}  

if (lc == ('plant a flower day')) {
    rep = ('A day to garden and plant a flower. Date: March 12th');
}               

if (lc == ('st. patricks day')) {
    rep = ('In honor of Patron Saint of Ireland, who brought Christianity to the Emerald Isles. Date March 17th');
}

// April Holidays 

if (lc == ('april fools day')) {
    rep = ('A day to have fun, and prank your friends and family. Date: Apirl 1st');
}   

if (lc == ('national peanut butter and jelly day')) {
    rep = ('Many kids and adults love this famous sandwich. Date: April 2nd');
}   

if (lc == ('zoo overs day')) {
    rep = ('A day to visit zoos, and enjoy animals. Date: Apirl 8th'); 
}     

// May Holidays

if (lc == ('may day')) {
    rep = ('The celebration of spring coming into summer. Date: May 1st');
}

if (lc == ('star wars day')) {
    rep = ('A day to celebrate the huge science fiction series. Date: May 4th'); 
}

if (lc == ('cinco de mayo')) {
    rep = ('On May 5th, 1862, the Mexican army defeated the French army at the battle of Puebla. Date: May 5th');
}

// June Holidays 

if (lc == ('best friend\'s day')) {
    rep = ('A day to enjoy and appreciate your best friend. Date: June 8th');
}

if (lc == ('eat your vegetables day')) {
    rep = ('It was created to promote a healthier diet. Date: June 17th');
} 

if (lc == ('father\'s day')) {
    rep = ('Appreciate all the dad\'s. Date: June 18th');
}

// July Holidays 

if (lc == ('4th of july')) {
    rep = ('It is the birthday of our nation, we celebrate this because of the freedom that we gained. Date: July 4th');
} 

if (lc == ('national blueberry day')) {
    rep = ('Blueberries are one of the most healthiest fruits you can eat. Join the celebration by eating some blueberries. Date: July 8th');
}     

if (lc == ('embrace your geekness day')) {
    rep = ('Embrace your inner geek by hopping on your computer. Date: July 13th');
}     

// August Holidays

if (lc == ('national s\'mores day')) {
    rep = ('Relax by the campfire, and eat a s\'more to join the fun. Date: August 10th');
}

if (lc == ('vj day')) {
        rep = ('The celebration of the end of World War Two. Date: August 14th and 15th');
}

if (lc == ('women\'s equality day')) {
    rep = ('On this day women had the right. Date: August 26th');
}

// September Holidays 

if (lc == ('national grandparents day')) {
    rep = ('This day is to honor and remember the fun times you had with your grandparents. Date: September 10th');
}

if (lc == ('read a book day')) {
    rep = ('Relax with a good book, and enjoy reading for a while. Date: September 6th');
}

if (lc == ('911 remembrance day')) {
    rep = ('Remember those who passed away as well as those who lost a loved one. Date: September 11th');
}

// October Holidays 

if (lc == ('national pasta day')) {
    rep = ('Celebrate by eating some pasta. Date: October 17th');
}

if (lc == ('united nations day')) {
    rep = ('To recognize, the people who serve and help the environment. Date: October 24th');
}

if (lc == ('halloween')) {
    rep = ('To dress up as anything you want, you also eat candy. Date: October 31st');
}



       Slack.postMessageToChannel(channelName, rep);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
