// Assignment Code
var generateBtn = document.querySelector("#generate");



// Function to generate password


// Character options to be used in the random password
  var passwordLength= "";

  var lowercase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
  var uppercase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
  var symbols = [ "!","@","#","$","%","^","&","*","(",")","+","-","?","<",">","/" ];
  var numeric = [ "0","1","2","3","4","5","6","7","8","9" ];

  function generatePassword() {
  
    var passwordLength = (prompt("How many characters will your new password be?"));
  
    if (passwordLength <=7 || passwordLength >= 129) {
      alert( "Password length must be between 8 and 128 characters long!");
    }
  

// Which kind of characters would they like?

  var addLowercase = confirm( "Do you want your password to have lowercase characters?" );
  var addUppercase = confirm( "How about uppercase letters?" );
  var addSymbols = confirm( "Symbols?" );
  var addNumeric = confirm( "Gotta have some numbers, right?");

// Telling the script which variable arrays to include in the password

  var passwordArray = []

  if (addLowercase) {
    passwordArray = passwordArray.concat(lowercase)
  }

  if (addUppercase) {
    passwordArray = passwordArray.concat(uppercase)
  }

  if (addSymbols) {
    passwordArray = passwordArray.concat(symbols)
  }

  if (addNumeric) {
    passwordArray = passwordArray.concat(numeric)
  }

  var arrayIndexSelector = ""

  for (var i = 0; i < passwordLength; i++) {
    arrayIndexSelector = arrayIndexSelector + passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return arrayIndexSelector;
}  

// Add the generated password to the HTML

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);