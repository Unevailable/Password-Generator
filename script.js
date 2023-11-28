// Contains the array
let generateBtn = document.querySelector("#generate");
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];


// Allows for the prompts and user inputs to generate a password

function passwordPrompt(){
  let characters = parseInt(
    prompt("How Many Characters Would You Like In the Password?"),

  10); //asks the user how many characters they want in their passwords

  if (characters < 8) {
    alert("Password must contain at least 8 characters"); 
    return null; //tells the user they need a minimum of 8 characters
  }

  if (characters > 128) {
    alert("Password must contain less than 128 characters");
    return null; //tells the user they can have a maximum of 128 characters
  }

  let conLowerCase = confirm("click OK if you want lower case characters."); //ask the user if they want lowercase letters in the password
  let conUpperCase = confirm("click OK if you want upper case characters."); //ask the user if they want uppercase letters in the password
  let conNumbers = confirm("click OK if you want numbers."); //ask the user if they want numbers in the password
  let conSpecialCharacters = confirm("click OK if you want special characters."); //ask the user if they want special characters in the password
    
  if (conLowerCase) {
  }else if (conUpperCase) {
  }else if (conNumbers) {
  }else if (conSpecialCharacters) {
  }else {
    alert('Choose one of the options.') // if the users choose none of the option it sends an alert telling the user to choose one in order to make a password
  }

  return {
    characters,
    conLowerCase,
    conUpperCase,
    conNumbers,
    conSpecialCharacters,
  };
  

}

// calls to array list in order to generate a random password
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Generates the password
function generatePassword() {
  const options = passwordPrompt();
  
  let currentArr = [];
  
  if (options.conLowerCase) currentArr = currentArr.concat(lowerCase);
  if (options.conUpperCase) currentArr = currentArr.concat(upperCase);
  if (options.conNumbers) currentArr = currentArr.concat(numbers);
  if (options.conSpecialCharacters) currentArr = currentArr.concat(specialCharacters);
  
  console.log(currentArr);

  let pass = "";
  for (let i = 0; i < options.characters; i++) {
    pass += getRandom(currentArr);
  } 
  
  return pass;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);