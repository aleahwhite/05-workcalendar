
$(document).ready(function () {

  function updateStyle() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past present')
        $(this).addClass('future');

      }
    });
  };


  $('.saveBtn').on('click', function () {
    var blockId = $(this).closest('.time-block').attr('id');
    var userTask = $(this).siblings('.description').val();

    localStorage.setItem(blockId, userTask);
  });


  function displaySavedTask() {

    $('.time-block').each(function () {
      var blockId = $(this).attr('id');
      var savedTask = localStorage.getItem(blockId);

      if (savedTask !== null) {
        $(this).find('.description').val(savedTask);
      }
    })
  }

  $('#currentDay').text(dayjs().format('dddd, MMM DD YYYY'));

  updateStyle();
  displaySavedTask();

  setInterval(updateStyle, 60000);

});

