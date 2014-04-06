function Robinbook(config) {

  config.is_book = false;

  this.setupRobinbook = function setupRB () {
    if (isBookPage()) {
      // add the button
      button = $('.swatchElement').first().clone();
      button.find('.a-button-text').find('span').first().text("Free");
      button.find('.a-button-text');
      
      // take 

      firstButton = $('.swatchElement').first();
      $(button).insertBefore(firstButton);
      
      // $(config.buttonSelector).on('click', launchRobin);
      
      // get the ISBN
      isbn = getISBN();

      // kick off the background scaper
    }
  }

  function isBookPage() {
    // regular book page has id = dp, class = book
    classes = $('body').attr('class').split(/\s+/);

    if (classes.indexOf("book") != -1) {
      return true;
    }
    
    // kindle page has no id and class = dp
    // index = $.inArray("book", classes);
    // if ($('body').attr('id') == "" && classes.indexOf("dp") != -1) {
    //   return true;
    // }
    
    return false;
  }
  
  function getISBN() {
    
  }
  
  function launchRobin () {
    // load the other 
  }
}

(function() {
  var client = new Robinbook({});
  client.setupRobinbook();
})();