var submit_button, color_code_input, color_div, input_user_info;
var chars_range = ['#', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var is_correct;
(function() {

    console.log("loading");
    submit_button = document.getElementById('submit_button');
    color_div = document.getElementById('color_preview');
    color_code_input = document.getElementById('hash_code');
    input_user_info = document.getElementById("input_user_info");
    submit_button.addEventListener("click", function () { 
        var color_hash_code = color_code_input.value;
        set_color(color_hash_code);
    });
})();

function set_color (color_hash_code) { 
   clear_user_info();
   is_correct = check_code(color_hash_code);
   if(is_correct)
    {
        color_div.className = "set_color";
        if(color_hash_code.charAt(0) !== '#')
        {
            color_hash_code = '#' + color_hash_code;
        }
        color_div.style.backgroundColor = color_hash_code;
    }
    else
    {
        input_user_info.innerHTML = "incorrect form of hexadecimal code";
        color_div.className = "no_set_color";
    }
}

function clear_user_info()
{
    input_user_info.innerHTML = "";
}

function is_in_range(code)
{
    for(i=0; i<code.length; i++)
    {
        if(chars_range.includes(code.charAt(i)))
        {

        }
        else
        {
            return false;
        }
    }
    return true;
}

function check_code(code)
{
    var lower_case_code = code.toLowerCase();
    if(lower_case_code[0] == '#' && lower_case_code.length <= 7 && is_in_range(lower_case_code) || lower_case_code[0] !== '#' && lower_case_code.length <= 6 && is_in_range(lower_case_code) ) //
    {
        console.log("correct form of hex code");
        return true;
    }
    else
    {
        console.log("incorrect form of hex code");
        return false;
    }
}