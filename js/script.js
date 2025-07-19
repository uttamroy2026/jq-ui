$(document).ready(function(){

 $( "#draggable" ).draggable();

  $( "#accordion" ).accordion({


collapsible: true

});

let data=[
"HTML",
"CSS",
"jQuery",
"javascript",
"Bootstrip"
];
$( "#c_name" ).autocomplete({
      source: data

});

$("#datepicker").datepicker();

 $("#dialog").dialog();


$("#progressbar").progressbar({

value:50

});




$("#slider").slider();

$("#tabs").tabs();


$(document).tooltip();

 });   
 


