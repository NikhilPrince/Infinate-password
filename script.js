// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var symbolChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

function desiredLength(){
  passwordLength = prompt("How many characters would you like the password to have (between 8-128 characters): ");

    if (passwordLength<8){
      notice("Can only be numbers 8-128");
      desiredLength();
    }if (passwordLength>128){
      notice("Can only be numbers 8-128");
      desiredLength();
    }else{ alert("Next few questions is going to ask what type of charcters you want to be included in the password. If you pick 'No'  to all, then the password will only have lowercase letters.");  } 
}

function decideonUppercase(){
  uppercaseCheck = prompt("Should it have uppercase letters? (Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();
    if (uppercaseCheck == null || uppercaseCheck == ""){
      notice("Please answer Yes or No only");
      decideonUppercase();
    }if (uppercaseCheck == "yes" || uppercaseCheck =="y"){
      uppercaseCheck = true;
      return uppercaseCheck;
    }if (uppercaseCheck == "no" || uppercaseCheck =="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    }else {
      notice("Please answer Yes or No only");
      decideonUppercase(); }  
}

function decideonNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck == null || numberCheck == ""){
      notice("Please answer Yes or No only");
      decideonNumbers();
    }if (numberCheck == "yes" || numberCheck =="y"){
      numberCheck = true;
      return numberCheck;
    }if (numberCheck == "no" || numberCheck =="n"){
      numberCheck == false;
      return numberCheck;
    }else { notice("Please answer Yes or No only");
      decideonNumbers(); }
}

function decideonSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? (Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck == null || specialCheck == ""){
      notice("Please answer Yes or No only");
      decideonSpecial();
    }if (specialCheck == "yes" || specialCheck =="y"){
      specialCheck = true;
      return specialCheck;
    }if (specialCheck == "no" || specialCheck =="n"){
      specialCheck = false;
      return specialCheck;
    }else { notice("Please answer Yes or No only");
      decideonSpecial(); }
}

function generatePassword(){
  desiredLength();
  console.log(passwordLength);
  decideonUppercase();
  console.log(uppercaseCheck);
  decideonNumbers();
  console.log(numberCheck);
  decideonSpecial();
  console.log(specialCheck);

var characters = lowerLetter;
var password = "";
if(uppercaseCheck & numberCheck & specialCheck){
  characters += upperLetter + numberChar + symbolChar;
}else{
  characters = lowerLetter; }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length)); }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
