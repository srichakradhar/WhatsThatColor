/**
 * Created by chuck on 10/03/17.
 */
$(document).ready(function () {

    $("#color").focus();
    $("#color").keypress(function (event) {

        console.log(event);

        if (!event.ctrlKey || !event.metaKey || event.which != 13) {

            var regex = new RegExp("^[a-fA-F0-9]+$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }

        }

        // $(this).val($(this).val().replace(/[^a-fA-F0-9]/gi, ''));

        var input_color = $(this).val();

        $('body').css('background-color', '#' + input_color);
        if(input_color.length > 2) {
            if (input_color < '888888') {
                $(this).css('color', '#efefef');
                $('h1').css('color', '#efefef');
            }
            else {
                $(this).css('color', '#0a0a0a');
                $('h1').css('color', '#0a0a0a');
            }
        }

        if (input_color == '') {
            if (rgb2hex($('body').css('background-color')).substr(1) < '888888'){
                $(this).css('color', '#efefef');
                $('h1').css('color', '#efefef');
            }
            else {
                $(this).css('color', '#0a0a0a');
                $('h1').css('color', '#0a0a0a');
            }
        }

        if(input_color.length > 5) {
            $('#color').select();
            console.log(input_color);
        }
    });
});

var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}