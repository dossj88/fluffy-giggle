
//added save button
$(document).ready(function() {
  $('.saveBtn').on('click', function (){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // added js for localStorage
    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
      
    });

    function timeFormat() {
      var currentTime = dayjs().hour();
      
      $('.time-block').each(function () {
        var timeHour = parseInt($(this).attr('id').split('-')[1]);
        
        //add if statements
        if (timeHour < currentTime) {
          $(this).addClass('past');
        } else if (timeHour === currentTime) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }

    timeFormat();

    setInterval(timeFormat, 15000);
    //set current date on page
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
