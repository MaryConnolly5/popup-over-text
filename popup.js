$('.open-popup-words').magnificPopup({
  type:'inline',
  midClick: true .
});

// for the FAQ button
$('button').magnificPopup({
  items: {
      src: '<div class="popup1">Dynamically created popup</div>',
      type: 'inline'
  },
  closeBtnInside: true
});