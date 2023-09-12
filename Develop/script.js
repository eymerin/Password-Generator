// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var possibleChar = [];
var password = "";
var passLength = "";

function generatePassword() {
  password = ""
  getLength();
  getLower();
  getUpper();
  getNumeric();
  getSpecial();
  getRandom();
  console.log(password);
  return password;
}

function getLength() {
  var userLength = window.prompt("Password must be a minimum of 8 characters and a maximum of 128 characters. Enter desired password length:");
  if (userLength < 8) {
    window.alert("Length must be at least 8 and no higher than 128! Please try again!");
    getLength();
  } else if(userLength > 128) {
    window.alert("Length must be at least 8 and no higher than 128! Please try again!");
    getLength();
  } else {
    passLength = userLength;
    console.log(passLength);
    return passLength;
  }
}

function getLower() {
  var lowerChoice = window.prompt("Would you like your password to include lowercase letters? Enter y for yes and n for no:");
    if (lowerChoice == "n") {
      console.log(lowerChoice);
      return;
    } else if(lowerChoice == "y") {
      possibleChar = possibleChar.concat(lowerCase);
      console.log(lowerChoice);
      return lowerChoice;
    } else {
      window.alert("Enter y for yes and n for no, please try again!");
      console.log(lowerChoice);
      getLower();
    }
}

function getUpper() {
  var upperChoice = window.prompt("Would you like your password to include uppercase letters? Enter y for yes and n for no:");
    if (upperChoice == "n") {
      console.log(upperChoice);
      return
    } else if(upperChoice == "y") {
      possibleChar = possibleChar.concat(upperCase);
      console.log(upperChoice);
      return upperChoice;
    } else {
      window.alert("Enter y for yes and n for no, please try again!");
      console.log(upperChoice);
      getUpper();
    }
}

function getNumeric() {
  var numericChoice = window.prompt("Would you like your password to include numbers? Enter y for yes and n for no:");
    if (numericChoice == "n") {
      console.log(numericChoice);
      return;
    } else if(numericChoice == "y") {
      possibleChar = possibleChar.concat(numeric);
      console.log(numericChoice);
      return;
    } else {
      window.alert("Enter y for yes and n for no, please try again!");
      getNumeric();
    }
}

function getSpecial() {
  var specialChoice = window.prompt("Would you like your password to include special characters? Enter y for yes and n for no:");
    if (specialChoice == "n") {
      return;
    } else if(specialChoice == "y") {
      possibleChar = possibleChar.concat(specialChar);
      console.log(possibleChar);
      window.alert("password");
      return;
    } else {
      window.alert("Enter y for yes and n for no, please try again!");
      getSpecial();
    }
}

function getRandom() {
  for (let i = 0; i < passLength; i++) {
    let passwordChar = Math.floor(Math.random()*possibleChar.length);
    password += possibleChar[passwordChar];
    console.log(possibleChar[passwordChar]);
  }
  console.log(password);
  return password;
}


// Write password to the #password input
function writePassword() {
  
  var passwordOutput = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordOutput;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//writePassword();