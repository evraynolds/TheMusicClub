/*
 *  @author Rodrigo Queiroz
 *  @date 14th Mar 2015
 *
 *  Search Bar
 *
 */

$(document).ready( function() {

    $('.search a').on('click', function() {

        $('.search-bar').slideDown('fast'); // display search bar

        $('.close').click( function() { // close search bar
            $('.search-bar').slideUp('fast');
            $('.search-bar').removeClass('hide'); // remove class hide on hide
        });

        return false;

    });

});