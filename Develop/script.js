// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//prompts that come up when yuo click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the numbers of characters you want for your new password. It has to be between 12 and 128.");

  var numbers = confirm("Include numbers?");
  var lowerCases = confirm("Include lowecases?");
  var upperCases = confirm("Include uppercases?")
  var specialCha = confirm("Special characters?");
  var minimumCount = 0; //min count for number, lowerCases, upperCases & specialCharacters. 

  //empty minimum varibles
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  //generator functions
  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.floor.random() * 26 + 97));
    },
    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpacialCharacters: function () {
      const symbols = "!@#$%^&*()_+{}[]<>?,."
      return symbols[Math.floor(Math.random() * symbols.length)]
    }
  };

  //checking for users responses
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (upperCases === true) {
    upperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (specialCha === true) {
    minimumSpecialCharacters = functionArray.getSpacialCharacters();
    minimumCount++;
  }
  //empty string variable for the loop below
  var randomPasswordGenerated = "";

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}
