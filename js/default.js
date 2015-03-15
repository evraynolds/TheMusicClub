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

    $('aside .member').each( function(i) { // Team hover up and down

        var id      = ('ui-' + i); // generate unique ID
        $(this).addClass(id); // add class
        var info    = $('.'+id+' .info-further'); // info unique identifier

        $(this).hover( function() {

            info.slideDown('fast');
            $('.'+id+' .indicator').removeClass('fa-angle-down');
            $('.'+id+' .indicator').addClass('fa-angle-up');

        }, function() {

            info.slideUp('fast');
            $('.'+id+' .indicator').removeClass('fa-angle-up');
            $('.'+id+' .indicator').addClass('fa-angle-down');

        });

    });

});
