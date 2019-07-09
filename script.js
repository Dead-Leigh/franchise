// figure out how to d/t autofocus
//this is for the big modal aka leadModal
$(document).ready(function() {

  $('#go-btn').click(function(){
    var zipcode = $('#zipcode').val();
    $('#smallZip').val(zipcode);
  });

  $('#submit').click(function(){
    console.log("submitted");
  });

  $("#quote_submit").click(function(e){

    e.preventDefault();
    // formSubmit(e.currentTarget.name);
    formSubmit('smallForm');
  });

});
// console.log("ready!") --



function formSubmit(name) {
  var serializedData = $(document.forms[name]).serializeObject();
  var url = 'https://script.google.com/macros/s/AKfycbywAdx0h4RMpnyS0bAms9iW7QFRDdBN4rrEMDQvlADDro8qZko/exec'

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      console.log('success', data);
    }
  });
}

// $('#inputEmail').click(function(){
//   console.log('#submit').val(email);
// });


//https://script.google.com/macros/s/AKfycbywAdx0h4RMpnyS0bAms9iW7QFRDdBN4rrEMDQvlADDro8qZko/exec
