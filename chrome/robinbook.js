function Robinbook(config) {

  config.is_book = false;
  
  config.buttonSelector   = '#totallyAwesomeSelfieButton';
  config.toggleSelector = '#selfieToggle';
  config.setupComplete    = false;
  config.selfiesTaken     = 0;

  config.toggleHTML = (
    '<button id="selfieToggle" type="button" class="button dark-grey">GIF?</button>'
  );

  this.setupRobinbook = function setupRB () {
    // is it a book?
    // YES => clone the button
    placeButton($(a-button-list))
    
    // kick off the background scaper
  }

  function placeButton (candidate) {
    $(config.buttonHTML).insertAfter(candidate);
  }

  function setupEvents () {
    $(config.buttonSelector).on('click', launchRobin);
    $(config.buttonSelector).hover(startVideo);
    $('.write-tab').on('click', showElements);
    $('.preview-tab').on('click', hideElements);
  }
  
  function launchRobin () {
    // load the other 
  }
}

(function() {
  var config = {}, client = new Robinbook(config);
  client.setupRobinbook();
})();