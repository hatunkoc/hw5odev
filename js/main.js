 var ul=document.getElementById('ul');
        var btn=document.getElementById('button');
        var scoreCard=document.getElementById('scoreCard');
        var quizBox=document.getElementById('questionBox');
        var op1=document.getElementById('op1');
        var op2=document.getElementById('op2');
        var op3=document.getElementById('op3');
        var op4=document.getElementById('op4');
        
            
            var app={
                questions:[
                    {q:'Dünya kaç katmanlı bir yapıdır ?' ,options:['Üç','Beş','Altı','Yedi'],answer:2},
                    {
                    q:'Fatih Sultan Mehmet’in babası kimdir?' , options:['İkinci Murat','Yıldırım Beyazıt','Birinci Mehmet','Yavuz Sultan Selim'],answer:1},
                    {
                    q:'Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?' ,options:['Fransa','İngiltere','İspanya','Rusya'],answer:2},
                    {
                    q:'Hangisi tarihteki Türk devletlerinden biri değildir?' ,options:['Hun İmparatorluğu','Emevi Devleti','Avar Kağanlığı','fybu'],answer:2},
                    {
                    q:'ABD başkanlarından John Fitzgerald Kennedy’e suikast düzenleyerek öldüren kimdir?' ,options:['Jack Ruby','Clay Shaw','Nelson Mandela','Lee Harvey Oswald'],answer:4},
                    {
                    q:'Tarihçilerin Kutbu olarak bilinen dünyaca ünlü tarihçimiz kimdir?' ,options:['Halil İnalcık','Mehmet Fuat Köprülü','İlber Ortaylı','Dog'],answer:1},
                    {
                    q:'Hangisi kuvvet birimidir?' ,options:['km','Joule','Newton','Pascal'],answer:3},
                    
                    ],
                   
                    
                    index:0,
                    load:function(){
                        if(this.index<=this.questions.length-1){

                        
                        quizBox.innerHTML=this.index+1+"."+this.questions[this.index].q;
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                       
                        this.scoreCard();
                    }
                    else{
                        quizBox.innerHTML="Yarışma Bitti..."
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                       
                        btn.style.display="none";
  
                    }
                        
                    },
                    next:function(){
                        this.index++;
                        this.load();

                    },
                    check:function(ele){

                        var id=ele.id.split('');
                        
                        if(id[id.length-1]==this.questions[this.index].answer){
                           this.score++;
                           ele.className="doğru";
                           ele.innerHTML="Doğru";
                           this.scoreCard();
                        }
                        else{
                            ele.className="yanlış";
                            ele.innerHTML="Yanlış";
                        }
                       

                    },
                    notClickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                            ul.children[i].style.pointerEvents="none";
                        }
                    },
                    clickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                            ul.children[i].style.pointerEvents="auto";
                            ul.children[i].className=""
                        }
                    },
                
                
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML=this.questions.length+"/"+this.score;
                    }
            }
            window.onload=app.load();

            function button(ele){
                app.check(ele);
                app.notClickAble();
            }
            function next(){
                app.next();
                app.clickAble();
            }
             function shuffleQuestions() {

                var currIndex = questionsAnswersArray.length,
                    temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currIndex);
                    currIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = questionsAnswersArray[currIndex];
                    questionsAnswersArray[currIndex] = questionsAnswersArray[randomIndex];
                    questionsAnswersArray[randomIndex] = temporaryValue;
                }
            }

            // function to spin the first picture and answers every time they load
            function spin() {
                $("#answer-list, #pic-field").addClass("flip");
                $("#answer-list, #pic-field").toggleClass("flipback", "flip");
            }
            var timer = {

                // initialize seconds to 10
                seconds: 20,

                // function to make timer count down
                decrement: function() {

                    // decrement by 1 second
                    timer.seconds--;

                    // display the number of seconds left
                    $("#time-left").html("&nbsp;&nbsp;" + timer.seconds);

                    // the seconds turn red once they reach 3
                    if (timer.seconds < 4) {
                        $("#time-left").css("color", "red");
                    }

                    // change text from 'seconds' to 'second' when timer reaches 1
                    if (timer.seconds === 1) {
                        $("#seconds").html("second&nbsp;&nbsp;");
                    } else {
                        $("#seconds").text("seconds");
                    }

                    // if user doesn't select an answer, increase their number of incorrect answers, show them the correct answer, and highlight the correct answer
                    if (timer.seconds === 0) {
                        incorrectCount++;
                        $("#" + correctShow).addClass("correct");
                        $("#right-wrong").html("<p>Süreniz bitti!</p><p>Cevap  <span class='correct-text'>" + correctAnswer + "</span>.</p>");
                        
                        // stop the timer
                        timer.stop();
                        
                        // remove active class from the answer <ul> so that user can't trigger click events
                        $("#answer-list").removeClass("active");

                        // display image for correct answer
                        $("#pic-field").html(picTwo);

                        // call function to display next question
                        setTimeout(displayQuestion, 3000);
                    }
                },
                 run: function() {

                    // clear the interval each time the timer starts
                    clearInterval(intervalId);

                    // set the timer interval for the secrement function
                    intervalId = setInterval(timer.decrement, 1000);

                    // create the timer display
                    $("#timer").html("Süreniz: <span id='time-left'>10</span> <span id='seconds'>seconds</span>");

                    // always start with 10 seconds
                    $("#time-left").text(20);
                    timer.seconds = 20;
                },

                // fnuction to stop the timer and clear the interval
                stop: function() {

                    clearInterval(intervalId);
                }
            };

