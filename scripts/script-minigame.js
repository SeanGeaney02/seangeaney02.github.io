// function which will run the mingame when the button is clicked

function miniGame(){
    // counter will act as counting how many questions the user gets correct
    var counter = 0;
    // first question
    var ans1 = prompt("What percentage did vehicals CO2 emmisions increase in 2022? 1.4% or 2.4%"); 
    // if the user leaves the input area black the game will end displaying this message
    if(ans1 == ""){
        alert("I guess you dont want to play");
        return;
        // the possible correct inputs
    }else  if (ans1 == "1.4%" || ans1 == "1.4"){
        // counter is incremented
        counter = counter + 1
        // this will print the question and users answer to screen
        document.getElementById("q1").innerHTML = "Question:What percentage did vehicals CO2 emmisions increase in 2022? 1.4% or 2.4% <br> Answer: "+ ans1;
        console.log(counter);
        // if the user presses cancel
    }else if(ans1 == null){
        return

    }else{
        // counter remains the same
        counter = counter
        document.getElementById("q1").innerHTML = "Question:What percentage did vehicals CO2 emmisions increase in 2022? 1.4% or 2.4% <br> Answer: "+ ans1;
        console.log(counter);
    }


    // if staement pattern is repeated with the next question
    var ans2 = prompt("Solar energy is a completly renewable and sustainable form of energy. True or False?");

    if(ans2 == ""){
        alert("I guess you dont want to play");
        return;
    }else  if (ans2 == "True" || ans2 == "true"){
        counter = counter + 1
        document.getElementById("q2").innerHTML = "Question:Solar energy is a completly renewable and sustainable form of energy. True or False? <br> Answer: "+ ans2;
        console.log(counter);
    }else if(ans2 == null){
        return
    }else{
        counter = counter
        document.getElementById("q2").innerHTML = "Question:Solar energy is a completly renewable and sustainable form of energy. True or False? <br> Answer: "+ ans2;
        console.log(counter);
    }

    var ans3 = prompt("What is considered to be the main issue with nuclear energy? Waste Products or Air pollution?");

    if(ans3 == ""){
        alert("I guess you dont want to play");
        return;
    }else  if (ans3 == "Waste Products" || ans3 == "waste products"){
        counter = counter + 1
        document.getElementById("q3").innerHTML = "Question:What is considered to be the main issue with nuclear energy? Waste Products or Air pollution? <br> Answer: "+ ans3;
        console.log(counter);
    }else if(ans3 == null){
        return
    }else{
        counter = counter
        document.getElementById("q3").innerHTML = "Question:What is considered to be the main issue with nuclear energy? Waste Products or Air pollution? <br> Answer: "+ ans3;
        console.log(counter);
    }

    var ans4 = prompt("What is the oldest form of renewable energy? Hydro or Wind?");

    if(ans4 == ""){
        alert("I guess you dont want to play");
        return;
    }else  if (ans4 == "Wind" || ans4 == "wind"){
        counter = counter + 1
        document.getElementById("q4").innerHTML = "Question:What is the oldest form of renewable energy? Hydro or Wind? <br> Answer: "+ ans4;
        console.log(counter);
    }else if(ans4 == null){
        return
    }else{
        counter = counter
        document.getElementById("q4").innerHTML = "Question:What is the oldest form of renewable energy? Hydro or Wind? <br> Answer: "+ ans4;
        console.log(counter);
    }

    var ans5 = prompt("Did you find this websites information informative and well designed? *hint* Yes is the only right answer");

    if(ans5 == ""){
        alert("I guess you dont want to play");
        return;
    }else  if (ans5 == "Yes" || ans5 == "yes"){
        counter = counter + 1
        document.getElementById("q5").innerHTML = "Question:Did you find this websites information informative and well designed? <br> Answer: "+ ans2;
        console.log(counter);
    }else if(ans1 == null){
        return
    }else{
        counter = counter
        document.getElementById("q5").innerHTML = "Question:Did you find this websites information informative and well designed? <br> Answer: "+ ans2;
        console.log(counter);
    }

    // after the questions have been answered the counter will be checked 
    if(counter == 5){
        // display the congradulations message
        document.getElementById("WorL").innerHTML = "Congratulations!!<br>You got all the answers correct and your reward is......<br> a cookie!"
        // the cookie image will be displayed
        document.getElementById("cookie").style.display = "block"
    }else{
        // user didnt answer all questions correctly so try message appears
        document.getElementById("WorL").innerHTML = "Oh so close but you didnt get all the questions correct, try again and win your reward"
    }

};