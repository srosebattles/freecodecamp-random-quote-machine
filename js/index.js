var quotes = [{
    "quote": "Titles are granted, but it’s your behavior that earns you respect.",
    "author": "J. Kouzes & B. Posner",
    "source": "The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations",
    "URL": "http://amzn.to/29dbn6k",
  }, {
    "quote": "Recognition is the most powerful currency you have, and it costs you nothing ....",
    "author": "J. Kouzes & B. Posner",
    "source": "The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations",
    "URL": "http://amzn.to/29dbn6k",
  },

  {
    "quote": "Change is the province of leaders. It is the work of leaders to inspire people to do things differently, to struggle against uncertain odds, and to persevere toward a misty image of a better future.",
    "author": "J. Kouzes & B. Posner",
    "source": "The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations",
    "URL": "http://amzn.to/29dbn6k",
  },

  {
    "quote": "Even with commonly identified values, there may be little agreement on the meaning of values statements. The lesson here is that leaders must engage their constituents in a dialogue about values. A common understanding of values emerges from a process, not a pronouncement.",
    "author": "J. Kouzes & B. Posner",
    "source": "The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations",
    "URL": "http://amzn.to/29dbn6k",
  },

  {
    "quote": "You have to believe, and you have to develop the skills to transmit your belief. It’s your passion that brings the vision to life. If you’re going to lead, you have to recognize that your enthusiasm and expressiveness are among your strongest allies in your efforts to generate commitment in others. Don’t underestimate your talents.",
    "author": "J. Kouzes & B. Posner",
    "source": "The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations",
    "URL": "http://amzn.to/29dbn6k",
  },
              {
    "quote": "Power isn’t control at all — power is strength, and giving that strength to others. A leader isn’t someone who forces others to make him stronger; a leader is someone willing to give his strength to others that they may have the strength to stand on their own.",
    "author": "Beth Revis",
    "source": "Across the Universe",
    "URL": "http://amzn.to/297O9Zp",
              },
              {
    "quote": "It has been my impression that at any gathering, whether it be public or private, those who are quickest to inject words like sensitivity, empathy, consensus, trust, confidentiality, and togetherness into their arguments have perverted these humanitarian words into power tools to get others to adapt to them.",
    "author": "Edwin H. Friedman",
    "source": "A Failure of Nerve: Leadership in the Age of the Quick Fix",
    "URL": "http://amzn.to/29ouuHs",
              },
              {
    "quote": "The colossal misunderstanding of our time is the assumption that insight will work with people who are unmotivated to change. Communication does not depend on syntax, or eloquence, or rhetoric, or articulation but on the emotional context in which the message is being heard. People can only hear you when they are moving toward you, and they are not likely to when your words are pursuing them. Even the choicest words lose their power when they are used to overpower. Attitudes are the real figures of speech.",
    "author": "Edwin H. Friedman",
    "source": "A Failure of Nerve: Leadership in the Age of the Quick Fix",
    "URL": "http://amzn.to/29ouuHs",
              },
              {
    "quote": "Leadership through self-differentiation is not easy; learning techniques and imbibing data are far easier. Nor is striving or achieving success as a leader without pain: there is the pain of isolation, the pain of loneliness, the pain of personal attacks, the pain of losing friends. That’s what leadership is all about.",
    "author": "Edwin H. Friedman",
    "source": "A Failure of Nerve: Leadership in the Age of the Quick Fix",
    "URL": "http://amzn.to/29ouuHs",
              },
              {
    "quote": "... no one has ever gone from slavery to freedom with the slaveholders cheering them on, nor contributed significantly to the evolution of our species by working a forty-hour week, nor achieved any significant accomplishment by taking refuge in cynicism.",
    "author": "Edwin H. Friedman",
    "source": "A Failure of Nerve: Leadership in the Age of the Quick Fix",
    "URL": "http://amzn.to/29ouuHs",
              }
];

var quoteNumber = 0;

function randomNumber() {

  var tempNum = quoteNumber; //declare value that will temporarily hold the random number generated.

  while (tempNum === quoteNumber) {
    tempNum = Math.floor(Math.random() * (quotes.length));
  } //ensure that each 'refresh' pulls a number not equal to the number used before

  quoteNumber = tempNum; //assign new number to var being used in rest of doc.
}

//initial random quote build
$(document).ready(function() {
  randomNumber();
  $("#quote").html('"' + quotes[quoteNumber]["quote"] + '"');
  $("#footer").html(quotes[quoteNumber]["author"] + ' in ' + "<cite title = 'source-title'><a href = '" + quotes[quoteNumber]["URL"] + "' target ='blank_'>" + quotes[quoteNumber]["source"] + "</a></cite>");
  $(".quoteBox").fadeIn();
});

//random quote build upon button click
$("#newQuote").click(function() {
  $(".quoteBox").fadeOut(500, function() {
    randomNumber();
    $("#quote").html('"' + quotes[quoteNumber]["quote"] + '"');
    $("#footer").html(quotes[quoteNumber]["author"] + ' in ' + "<cite title = 'source-title'><a href = '" + quotes[quoteNumber]["URL"] + "' target ='blank_'>" + quotes[quoteNumber]["source"] + "</a></cite>");

  });

  $(".quoteBox").fadeIn(500);

});

$("#tweet").click(function(){
 var tweetContent = 'https://twitter.com/intent/tweet?text="' + quotes[quoteNumber]["quote"] + '" -' + quotes[quoteNumber]["author"]; //variable creates tweet intent URL.
  window.open(tweetContent)
});