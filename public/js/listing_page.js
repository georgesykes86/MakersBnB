$(function(){

  $('#mdp').multiDatesPicker({
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
          <div class='listing'>
            <p>${v.User.name}</p>
            <p>${v.User.email}</p>
            <p>${v.User.phone_nr}</p>
            <p>${v.title}</p>
            <p>${v.description}</p>
            <p>£${v.price}pn</p>
          </div>
        </div>`
      );
      i++;
      });
  });

});
