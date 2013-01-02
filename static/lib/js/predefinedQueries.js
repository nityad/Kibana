var selectValues = {
    "Query 1": "Query 1",
    "Query 2": "Query 2"
};

$(function() {
    $.each(selectValues, function(key, value) {
         $('#predefined_queryinput')
             .append($("<option></option>")
             .attr("value",key)
             .text(value));
        });
});

