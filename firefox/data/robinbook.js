function Robinbook(config) {

  config.is_book = false;

  this.setupRobinbook = function setupRB () {
    if (isBookPage()) {
      // add the button
      button = $('.swatchElement').first().clone();
      button.find('.a-button-text').find('span').first().text("Library");
      button.find('.a-button-text').find('span').last().text("Free");
      button.find('.a-button-text').find('.a-icon').remove();

      button.find('.tmm-olp-links').remove();
      
      button.find('.a-button-text');
      
      // take 

      firstButton = $('.swatchElement').first();
      $(button).insertBefore(firstButton);
      $(button).on('click', launchRobbin);
      
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
    bold_isbn = $("li b:contains('ISBN-13')")[0];
    isbn_li = $(bold_isbn).parent()[0];
    isbn = $(isbn_li).contents()[1]
    return isbn.data.trim();
  }
  
  function launchRobbin() {
    isbn = getISBN();
    nypl = "https://www.worldcat.org/isbn/" + getISBN();
    window.open(nypl);
    return false;
  }

}

(function() {
  var client = new Robinbook({});
  client.setupRobinbook();
})();

