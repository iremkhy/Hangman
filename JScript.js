
        var wrong_guess = 5;
        var words = ["computer", "engineer", "university", "software", "hardware", "developer"];
        var word = words[Math.floor(Math.random() * words.length)];
        var answer_letter = [];
        var remaining = word.length;
     
        for (var i = 0; i < word.length; i++) {
            answer_letter[i] = "_";

            document.getElementById("word").innerHTML = answer_letter.join(" ");
        }
        function guess() {

            var input = document.getElementById("letter").value;
            document.getElementById("letter").value = ""; 

            for (var i = 0; i < word.length; i++) {
                if (word[i] === input) {
                    answer_letter[i] = input;
                    remaining--;
                }
            }

            document.getElementById("word").innerHTML = answer_letter.join(" ");


            if (word.indexOf(input) == -1) {
                wrong_guess--;
                document.getElementById("wrong_letter").innerHTML += input + " ";
            }

            if (remaining === 0) {
                alert("You Win");
                
            }
                    
            if (wrong_guess === 0) {
                alert("You Lose");
               
            }
        }
       