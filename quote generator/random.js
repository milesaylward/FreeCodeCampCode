$(document).ready(function() {
  $(".quoteGen").click(function() {
    randomColor();
    changeQuote();
  })
  $('.tweet').click(function() {
    var addQuote = $('#quotetext').text();
    addQuote = addQuote.replace(/\s/g, '%20')
    var tweetSource = $('.author').text().replace(/\s/g, '%20');
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + addQuote + "%20-" + tweetSource;
    $('.tweet').attr("href", tweetUrl);
  });
});

function randomColor() { 
  var randomColor = "#"
  randomColor += Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('body').style.background = randomColor;
  document.getElementById('headline').style.color = randomColor;
  document.getElementById('quotetext').style.color = randomColor;
  document.getElementById('author').style.color = randomColor;

}

function changeQuote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data) {
      chosenObject = data;
      var chosenQuote = chosenObject.quote;
      var chosenSource = chosenObject.author;
      $('.quote').text(chosenQuote);
      $('.author').text(chosenSource);
    },
    error: function(err) {
      alert(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "o5AUAdIfy7mshogrBLb4C0nvS91Ip1WvxQPjsnw6vYnbKgQ4Zh");
    }
  });
}