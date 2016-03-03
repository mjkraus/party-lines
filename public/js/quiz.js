// quiz based on http://www.nytimes.com/interactive/2016/us/elections/candidates-on-the-issues.html
// Same-Sex Marriage, Israel, Climate Change, Trans-Pacific Partnership, Syrian No-Fly Zone,
// N.S.A,China
// http://blog.kevinchisholm.com/javascript/getting-started-with-highcharts-part-i-basic-charts/

  var quoteArray = [{
    topic: "Immigration",
    quote: '"I would secure the borders — north, south, east and west."',
    speaker: "Ben Carson",
    party: "rep",
    image: "carson.png"

  }, {
    topic: "Gun Control",
    quote: '"How many people have to die before we actually act?"',
    speaker: "Hillary Clinton",
    party: "dem",
    image: "clinton.png"    

  }, {
    topic: "Health Care",
    quote: '"I do not support Obamacare. I want to repeal it."',
    speaker: "John Kasich",
    party: "rep",
    image: "kasich.png"    

  }, {    
    topic: "Same-Sex Marriage",
    quote: '"We should ban discrimination against L.G.B.T. Americans and their families so they can live, learn, marry and work just like everybody else."',
    speaker: "Hillary Clinton",
    party: "dem",
    image: "clinton.png"    

  }, {
    topic: "N.S.A",
    quote: '"I assume when I pick up my telephone, people are listening to my conversations anyway, if you want to know the truth. It’s pretty sad commentary. But I err on the side of security."',
    speaker: "Donald J Trump",
    party: "rep",
    image: "trump.png"    

  }, {

    topic: "Syrian Refugees",
    quote: '"We can’t background-check them. You can’t pick up the phone and call Syria, and that’s one of the reasons why I’ve said we won’t be able to take more refugees. It’s not that we don’t want to, it’s that we can’t."',
    speaker: "Marco Rubio",
    party: "rep",
    image: "rubio.png"

  }, {
    topic: "Dealth Penalty",
    quote: '"The state itself, in a democratic, civilized society, should itself not be involved in the murder of other Americans."',
    speaker: "Bernie Sanders",
    party: "dem",
    image: "sanders.png"    

  }, {    
    topic: "Islamic State",
    quote: '"We have got to be as aggressive as we can in destroying ISIS, but we have to learn the lessons of the past, and that means we cannot do it alone."',
    speaker: "Bernie Sanders", 
    party: "dem",
    image: "sanders.png"    

  }, {
    topic: "China",
    quote: '"China is on a campaign of territorial expansion, the intent of which is to kick America out of the Pacific."',
    speaker: "Ted Cruz",
    party: "rep",
    image: "cruz.png"    

  }, {
    topic: "Climate Change",
    quote: '"Climate change is threatening this planet in horrendous ways."',
    speaker: "Bernie Sanders",
    party: "dem",
    image: "sanders.png"         
  }];
  
  var quoteCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var score = $('#score'); //Score div object
  var results = $('#results');
  var rep = 0; //tracks republican 
  var disrep = 0;
  var dem = 0;
  var disdem = 0;

  displayNext();


  function createQuote(index) {
    var createQuoteDiv = $('<div>', {
      id: 'quote'
    });
    
    // var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    // createQuoteDiv.append(header);

    var topic = $('<h3>').append(quoteArray[index].topic);
    createQuoteDiv.append(topic);

    var question = $('<p>').append(quoteArray[index].quote);
    createQuoteDiv.append(question);
    
    return createQuoteDiv;
  }

  $('.choiceButton').click(function() {
    selections.push($(this).val());
    console.log(selections);
    ++quoteCounter;
    displayNext();
    // if (selections.length == 6) {
    //     alert("Hello! I am an alert box!!");
    //  }
});

  
  // Displays next requested element
  function displayNext(){
    quiz.fadeOut(function(){
      $('#quote').remove();
      
      if(quoteCounter < quoteArray.length){
        var nextQuestion = createQuote(quoteCounter);
        quiz.append(nextQuestion).fadeIn();
      }else{
        console.log('Its Greater!');
      $('#agree').remove();
      $('#disagree').remove();      
        countComparison();
      };
    })
  }; 

    function countComparison(x, y){
      // WHAT SHOULD I DO IF THEY DISAGREE!!!
      for (var i = 0; i < quoteArray.length; i++) {
        if (quoteArray[i].party === "rep") {    
          if (selections[i] === "agree"){
              ++rep;
          }else if(selections[i] === "disagree"){
              ++disrep;
          };    
        }else if (quoteArray[i].party === "dem"){
          if (selections[i] === "agree"){
              ++dem;
          }else if(selections[i] === "disagree"){
              ++disdem; 
          };
        };  
      };
      // return (rep, dem);
        console.log("rep" + rep + "dem" + dem);
        over(rep, dem);
        displayChoices(quoteArray, selections);
    };

    function displayChoices(c, d){
      for(var i = 0; i < quoteArray.length; i++){
        var row = $('<div>', {'class': 'row final-results'});
        var card = $('<div>', {'class': 'col-md-6'});
          if (selections[i] === "agree"){
            var overlay = $('<div>',{'class': 'agree'});
            card.append(overlay);
          }else if (selections[i] === "disagree"){
            overlay = $('<div>',{'class': 'disagree'});
            card.append(overlay);
          };
        var card2 = $('<div>', {'class': 'col-md-6'});         
        var image = $('<img>').attr('src','/img/'+quoteArray[i].image);
        overlay.append(image);
        row.append(card);
        var quote = $('<p>').append(quoteArray[i].quote);
        card2.append(quote);
        var speaker = $('<p>').append(quoteArray[i].speaker);
        card2.append(speaker);
        row.append(card2);  
        results.append(row);  
      }
      results.fadeIn();
    }
 
  
  function over(a, b){

    results.append('You agree with ' + rep + 'rep quotes and ' + dem + 'dem quotes. You have disagreed with' + disrep + 'rep quotes and disagreed with' + disdem + 'quotes');

    score.append(results).fadeIn();
  };    