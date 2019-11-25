import $ from 'jquery';
$(document).ready(function(){
    $('#1').on('click', function(){

        console.log("chair");
        var chair = $('#1');
        chair.css('background-color', 'grey');


    })
})