function Robinbook(config) {

  config.is_book = false;

  config.buttonHTML = (
    '<button id="robinbook" type="button" class="button">Free!</button>'
  );

  this.setupRobinbook = function setupRB () {
    // is it a book?
    // YES => clone the button

    $('<h1>HELLOHELLO</h1>').insertBefore($('#ap_container'));
    $(config.buttonHTML).insertAfter($('.a-button-list :last-child'));
    $(config.buttonSelector).on('click', launchRobin);
    
    // kick off the background scaper
  }
  
  function launchRobin () {
    // load the other 
  }
}

(function() {
  var client = new Robinbook({});
  client.setupRobinbook();
})();