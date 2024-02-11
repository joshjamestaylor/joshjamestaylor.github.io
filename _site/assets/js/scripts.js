    // Array of random hints
    const hints = [
        "Try breaking the problem into smaller steps.",
        "Take a break and come back with a fresh perspective.",
        "Ask for help from a friend or colleague.",
        "Read the documentation for more insights.",
        "Experiment with different approaches.",
        "Think about the problem from a different angle.",
        "Review your code for typos and syntax errors.",
        "Consider using a debugger to trace the code execution.",
        "Don't be afraid to refactor your code if needed.",
        "Remember to check for edge cases."
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
            resultElement.innerHTML = "Success! You have selected the correct combination.";
        } else {
            resultElement.innerHTML = "Sorry, the combination is not correct. Please try again.";
        }
    }