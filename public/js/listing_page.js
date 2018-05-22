$(function(){

  var listings = $.getJSON("http://localhost:8000/listings", function(data){
    var i = 0;
    $.each(data, function(k,v){
      if (i % 2 === 0){
        $("#listings").append("<div class='row'>");
      }
      $(".row").last().append(
        `<div class='listing_container col-6'>
          <div class='listing'>
            <p>${v.name}</p>
            <p>${v.email}</p>
            <p>${v.phone}</p>
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
