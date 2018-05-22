$(function(){

  var listings = $.getJSON("http://localhost:8000/listings", function(data){

    $.each(data, function(k,v){
      $("#listings").append(
        '<div class="listing">',
        `<p>${v.name}</p>`,
        `<p>${v.email}</p>`,
        `<p>${v.phone}</p>`,
        `<p>${v.title}</p>`,
        `<p>${v.description}</p>`,
        `<p>${v.price}</p>`,
        '</div>'
      );
      });
  });

});
