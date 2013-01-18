var selectValues = {
    "400 errors": "@fields.response:\"400\"",
    "GET requests": "@fields.verb:\"GET\""
};

$(function() {
    $.each(selectValues, function(key, value) {
         $('#predefined_queryinput')
             .append($("<option></option>")
             .attr("value",value)
             .text(key));
        });
});

