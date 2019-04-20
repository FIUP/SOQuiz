/******* Le domande sono contenute dentro al file "domande.js" *******/

/******* No need to edit below this line *******/
let currentquestion = 0, score = 0, submt=true, picked, compitino1, compitino2;
    
    function set(){
        let val = document.getElementById("select").value;
        if(val == "-"){
                alert("Selezione non valida");
            }else if(val == "0"){
                $( "#title" ).remove();
                $( "#compitino" ).remove();
                $( "#pager" ).remove();
                $( "#question" ).remove();
                $( "#choice-block" ).remove();
                $( "#submitbutton" ).remove();
                compitino1 = true;
                compitino2 = false;
                init();
            }else if(val == "1"){
                $( "#title" ).remove();
                $( "#compitino" ).remove();
                $( "#pager" ).remove();
                $( "#question" ).remove();
                $( "#choice-block" ).remove();
                $( "#submitbutton" ).remove();
                compitino1 = false;
                compitino2 = true;
                init();
            }else{
                $( "#title" ).remove();
                $( "#compitino" ).remove();
                $( "#pager" ).remove();
                $( "#question" ).remove();
                $( "#choice-block" ).remove();
                $( "#submitbutton" ).remove();  
                compitino1 = true;
                compitino2 = true;
                init();
            }
    }

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
    function nextQuestion(compitino){
        submt = true;
        if(compitino == "1"){
            $('#question').text(quizCompitino1[currentquestion]['question']);
            $('#pager').text('Domanda ' + Number(currentquestion + 1) + ' di ' + quizCompitino1.length);
        
            addChoices(quizCompitino1[currentquestion]['choices']);
            setupButtons(compitino);    
        }else if(compitino == "2"){
            $('#question').text(quizCompitino2[currentquestion]['question']);
            $('#pager').text('Domanda ' + Number(currentquestion + 1) + ' di ' + quizCompitino2.length);
        
            addChoices(quizCompitino2[currentquestion]['choices']);
            setupButtons(compitino); 
        }else{
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Domanda ' + Number(currentquestion + 1) + ' di ' + quiz.length);
        
            addChoices(quiz[currentquestion]['choices']);
            setupButtons(compitino); 
        }
        
    }
    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice, compitino){
        if(compitino == "1"){
            if(quizCompitino1[currentquestion]['choices'][choice] == quizCompitino1[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quizCompitino1[currentquestion]['explanation']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quizCompitino1[currentquestion]['explanation']));
            }
        }else if(compitino == "2"){
            if(quizCompitino2[currentquestion]['choices'][choice] == quizCompitino2[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quizCompitino2[currentquestion]['explanation']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quizCompitino2[currentquestion]['explanation']));
            }
        }else{
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            }    
        }
        

        currentquestion++;

        $('#submitbutton').html('NEXT QUESTION').on('click', function(){
            if(compitino == "1"){
                if(currentquestion == quizCompitino1.length){
                    endQuiz(compitino);
                } else {
                    $(this).text('Check Answer').css({'color':'#fff'}).off('click');
                    nextQuestion(compitino);
                }   
            }else if(compitino == "2"){
                if(currentquestion == quizCompitino2.length){
                    endQuiz(compitino);
                } else {
                    $(this).text('Check Answer').css({'color':'#fff'}).off('click');
                    nextQuestion(compitino);
                }
            }else{
                if(currentquestion == quiz.length){
                    endQuiz(compitino);
                } else {
                    $(this).text('Check Answer').css({'color':'#fff'}).off('click');
                    nextQuestion(compitino);
                }
            }
            
        })
    }
    /**
     * Sets up the event listeners for each button.
     */
    function setupButtons(compitino){
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
                    processQuestion(picked, compitino);
                });
            }
        })
    }
    
    /**
     * Quiz ends, display a message.
     */
    function endQuiz(compitino){
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        if(compitino == "1"){
            $('#question').text(score + " corrette su " + quizCompitino1.length);
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quizCompitino1.length * 100) + '%').insertAfter('#question');
        }else if(compitino == "2"){
            $('#question').text(score + " corrette su " + quizCompitino2.length);
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quizCompitino2.length * 100) + '%').insertAfter('#question');
        }else{
            $('#question').text(score + " corrette su " + quiz.length);
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');    
        }        
        
    }
    /**
     * Runs the first time and creates all of the elements for the quiz
     */
    function init(){
        //add title
        if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
            $(document.createElement('h1')).text(quiztitle).attr("id", "title").appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Quiz").attr("id", "title").appendTo('#frame');
        }

        if(compitino1 && !compitino2){
            shuffle(quizCompitino1);
            $(document.createElement('h2')).text("Compitino 1").attr("id", "compitino").appendTo('#frame');   
            if(typeof quiz !== "undefined" && $.type(quizCompitino1) === "array"){
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
        
                setupButtons("1");
            }

        }else if(!compitino1 && compitino2){
            shuffle(quizCompitino2);
            $(document.createElement('h2')).text("Compitino 2").attr("id", "compitino").appendTo('#frame');
            if(typeof quiz !== "undefined" && $.type(quizCompitino2) === "array"){
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
        
                setupButtons("2");
            }
        }else if(compitino1 && compitino2){
            shuffle(quiz);
            $(document.createElement('h2')).text("Entrambi i compitini").attr("id", "compitino").appendTo('#frame');
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
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
        
                setupButtons("Entrambi");
            }
        }else{
            alert("C'è stato un errore, riseleziona i quiz");
        }
        //add pager and questions
        
    }
