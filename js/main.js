$(function() {
    
    // Select button with #submit-btn use .on() method the first parameter is event 'click' and second parameter is changeBackground function.
    $('#submit-btn').on('click', changeBackground);

    // Creating function changeBackground() to change the background image based on the city the user has entered.
    function changeBackground() {

        // Get the value user entered into textbox with #city-type and store in a variable called city.
        var city = $('#city-type').val();

        // Checking if city variable is equal to string 'New York' or 'New York City' or 'NYC'.
        if(city == 'New York' || city == 'New York City' || city == 'NYC') {

            // Appling class .nyc to body element.
            $('body').attr('class', 'nyc');

        }

        // Checking if city variable is equal to string 'San Francisco' or 'SF' or 'Bay Area'.
        else if(city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {

            // Appling class .sf to body element.
            $('body').attr('class', 'sf');

        }

        // Checking if city variable is equal to string 'Los Angeles' or 'LA' or 'LAX'.
        else if(city == 'Los Angeles' || city == 'LA' || city == 'LAX') {

            // Appling class .la to body element.
            $('body').attr('class', 'la');

        }

        // Checking if city variable is equal to string 'Austin' or 'ATX'.
        else if(city == 'Austin' || city == 'ATX') {

            // Appling class .austin to body element.
            $('body').attr('class', 'austin');

        }

        // Checking if city variable is equal to string 'Sydney' or 'SYD'.
        else if(city == 'Sydney' || city == 'SYD') {

            // Appling class .sydney to body element.
            $('body').attr('class', 'sydney');

        }
    }

});
