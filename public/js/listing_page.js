$(function(){

  $('#mdp').multiDatesPicker({
    dateFormat: "dd-mm-yy",

    minDate: 0, // today
    maxDate: 360 // +30 days from today
  });

  var listings = $.getJSON("http://localhost:8000/listings", function(data){
    var i = 0;
    $.each(data, function(k,v){
      if (i % 2 === 0){
        $("#listings").append("<div class='row'>");
      }
      $(".row").last().append(
        `<div class='listing_container col-6'>
          <div class='listing'><a href='/property/${v.id}'>
            <p>${v.title}</p>
            <p>${v.description}</p>
            <p>£${v.price}pn</p>
            <p>${v.dates}</p>
            </a>
          </div>
        </div>`
      );
      i++;
      });
  });


   $("#logout").click(function(){
     $.post("http://localhost:8000/logout", function(data) {
       window.location.href = data.redirect
     })
   });

});
