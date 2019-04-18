/******* Le domande sono contenute dentro al file "domande.js" *******/

/******* No need to edit below this line *******/
let currentquestion = 0, score = 0, submt=true, picked;
let compitino1 = false;
let compitino2 = false

jQuery(document).ready(function($){
    /**
     * HTML Encoding function for alt tags and attributes to prevent messy
     * data appearing inside tag attributes.
     */
    function htmlEncode(value){
      return $(document.createElement('div')).text(value).html();
    }
    /** 
     * Shuffle the array for random question
     */
    function shuffle(array) {
        for (var i = array.length-1; i > 0; --i) {
            // Select a random index 0 <= j <= i
            var j = Math.floor(Math.random() * (i+1));
            // Swap elements at i and j
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    /**
     * This will add the individual choices for each question to the ul#choice-block
     *
     * @param {choices} array The choices from each question
     */
    function addChoices(choices){
        if(typeof choices !== "undefined" && $.type(choices) == "array"){
            $('#choice-block').empty();
            for(var i=0; i < choices.length; i++){
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
            }
        }
    }
    
    /**
     * Resets all of the fields to prepare for next question
     */
    function nextQuestion(){
        submt = true;
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Domanda ' + Number(currentquestion + 1) + ' di ' + quiz.length);
        
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
    }
    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice){
        if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
            $('.choice').eq(choice).css({'background-color':'#50D943'});
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else {
            $('.choice').eq(choice).css({'background-color':'#D92623'});
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }

        currentquestion++;

        $('#submitbutton').html('NEXT QUESTION').on('click', function(){
            if(currentquestion == quiz.length){
                endQuiz();
            } else {
                $(this).text('Check Answer').css({'color':'#fff'}).off('click');
                nextQuestion();
            }
        })
    }
    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons(){
        $('.choice').on('mouseover', function(){
            $(this).css({'background-color':'#e1e1e1'});
        });
        $('.choice').on('mouseout', function(){
            $(this).css({'background-color':'#fff'});
        })
        $('.choice').on('click', function(){
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
            if(submt){
                submt=false;
                $('#submitbutton').css({'color':'#fff'}).on('click', function(){
                    $('.choice').off('click');
                    $(this).off('click');
                    processQuestion(picked);
                });
            }
        })
    }
    
    /**
     * Quiz ends, display a message.
     */
    function endQuiz(){
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('#question').text(score + " corrette su " + quiz.length);
        $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
    }
    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function init(){
        shuffle(quizCompitino1);
        shuffle(quizCompitino2);
        //add title
        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Quiz").appendTo('#frame');
        }
        //add pager and questions
        if(compitino1 && ! compitino2){
          if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
              //add pager
              $(document.createElement('p')).addClass('pager').attr('id','pager').text('Domanda 1 di ' + quizCompitino1.length).appendTo('#frame');
              //add first question
              $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quizCompitino1[0]['question']).appendTo('#frame');
          
              //questions holder
              $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
          
              //add choices
              addChoices(quizCompitino1[0]['choices']);
          
              //add submit button
              $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#fff','padding':'30px 0'}).appendTo('#frame');
          
              setupButtons();
          }else if(compitino2 && !compitino1){
            //add pager
            $(document.createElement('p')).addClass('pager').attr('id','pager').text('Domanda 1 di ' + quizCompitino2.length).appendTo('#frame');
            //add first question
            $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quizCompitino2[0]['question']).appendTo('#frame');
        
            //questions holder
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
        
            //add choices
            addChoices(quizCompitino2[0]['choices']);
        
            //add submit button
            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#fff','padding':'30px 0'}).appendTo('#frame');
        
            setupButtons();
          }else if(compitino1 && compitino2){
              //add pager
              $(document.createElement('p')).addClass('pager').attr('id','pager').text('Domanda 1 di ' + quiz.length).appendTo('#frame');

              //add first question
              $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');

              //questions holder
              $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

              //add choices
              addChoices(quiz[0]['choices']);
              
              //add submit button
              $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({'font-weight':700,'color':'#fff','padding':'30px 0'}).appendTo('#frame');
        
            setupButtons();
          }else{
            window.alert("Errore nella selezione del compitino");
          }
        }
        
    }
    
    init();
});
