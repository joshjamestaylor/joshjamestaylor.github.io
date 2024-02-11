    // Array of random hints
    const hints = [
        "What if I rotated that last painting.",
        "I seem to recognise that pattern in the final painting",
        "Maybe those numbers on the end painting mean something, ships? Buildings..?",
        "Interesting he mentions boxstep. How does it go again? Left, right, left, right, left... right?",
        "How many ports can I see?",
        "Second port USA?",
        "The 4th abstract painting looks like the feet of a dance."
      ];
  
      function generateRandomHint() {
        // Get a random hint from the array
        const randomIndex = Math.floor(Math.random() * hints.length);
        const randomHint = hints[randomIndex];
  
        // Display the hint in the HTML
        document.getElementById("hint").textContent = randomHint;
      }


      function checkCombination() {
        var dropdown1Value = document.getElementById("dropdown1").value;
        var dropdown2Value = document.getElementById("dropdown2").value;
        var dropdown3Value = document.getElementById("dropdown3").value;
    
        // Define the successful combination
        var successfulCombination = ['21', '12', 'BDAECF'];
    
        var resultElement = document.getElementById("result");
    
        // Check if the selected combination is successful
        if (
            dropdown1Value === successfulCombination[0] &&
            dropdown2Value === successfulCombination[1] &&
            dropdown3Value === successfulCombination[2]
        ) {
            resultElement.innerHTML = "Yes I'm in. There's a note. It reads 'In this vault, where secrets are kept and treasures unfold, I've hidden something for you – a gift. 2 Tickets. Picture this: a clandestine boat ride under a sky adorned with stars, the soft jazz melodies caressing our ears as the city lights twinkle in the distance. To her, from him.";

        } else {
            resultElement.innerHTML = "Hmmm, that's not it. Let's try again";
        }
    }