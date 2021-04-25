// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]; 
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specCha = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "`", ":", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "`", ":", "!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "`", ":"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,];

var passwordArray = []
var userInput = []

function genPassword() {
  var minChar = window.prompt("Please input your password length. Minimum 8 - Maximum 128. ");

  if (minChar >= 8 && minChar < 128){
    password = selectCharacter();
  } else {
    alert("Password must be between 8 and 128 characters")
    genPassword();
  }
  function selectCharacter() {
    var lowerCases = window.confirm("Include lower case?");
      if (lowerCases === true) {
        userInput = userInput.concat(lowerC);
        passwordArray.push(lowerC[Math.floor(Math.random() * lowerC.lenth)]);
      }
    var upperCases = window.confirm ("Include uper case?");
      if (upperCases === true) {
        userInput = userInput.concat(upperC);
        passwordArray.push(upperC[Math.floor(Math.random() * upperC.lenth)]);
      }
    var specilcha = window.confirm ("Include special characters?");
      if (specilcha === true) {
        userInput = userInput.concat(specCha);
        passwordArray.push(specCha[Math.floor(Math.random() * specCha.lenth)]);
      }
    var number = window.confirm ("Include numbers?");
      if (number === true) {
        userInput = userInput.concat(numbers);
        passwordArray.push(numbers[Math.floor(Math.random() * numbers.lenth)]);
      }
      if (!lowerCases && !upperCases && !specilcha && !numbers) {
        alert ("You should include one character type!")
        selectCharacter();
      }
      console.log(passwordArray);
      console.log(userInput);

      var passArrLen = passwordArray.length;

      for (i = passArrLen; i < minChar; i ++) {
        passwordArray.push(userInput[Math.floor(Math.random() * userInput.length)]);
      }

      var finalPass = ""
        for (f = 0; f < minChar; f++){
        finalPass = finalPass + userInput[Math.floor(Math.random() * passwordArray.length)]
      }

      console.log(finalPass);
      return finalPass;
}
  
  return password;
  
}
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
