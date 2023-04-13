function getCurrentDate() {
  $.ajax({
    url: '/date',
    type: 'GET',
    success: function(response) {
      $('#date').html(response);
    }
  });
}

setInterval(getCurrentDate, 1000);