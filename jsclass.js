/*
      Created by: Mustafa Rasouli
      Last updated: March 29, 2022
      Decription: Using JS to manipulate the behavior of the application
*/
// Getting the DOM Elements
const res = document.getElementById("result");
const copybutton = document.getElementById("copy");
const size = document.getElementById("length");
const upperCase = document.getElementById("uppercase");
const number = document.getElementById("numbers");
const generatebutton = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");

// character generator 
const upperCaseCode = arrayFromLowToHigh(65, 90);//capital letters from ASCII table 
const lowerCaseCode = arrayFromLowToHigh(97, 122);//lower case letter in ASCI table
const numberCode = arrayFromLowToHigh(48, 57);
const symbolCode = arrayFromLowToHigh(33, 47)
 .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// loops through charatcter to generate the code
function arrayFromLowToHigh(low, high) {
      const array = [];
      for (let i = low; i <= high; i++) {
        array.push(i);
      }
      return array;
}

// using arrow function to generate the password
let generatePassword = (
      characterAmount,
      includeUppercase,
      includeNumbers,

    ) => {
      let charCodes = lowerCaseCode;
      if (includeUppercase) charCodes = charCodes.concat(upperCaseCode);
      if (includeNumbers) charCodes = charCodes.concat(numberCode);
      const passwordCharacters = [];
      for (let i = 0; i < characterAmount; i++) {
        const characterCode =
          charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
      }
      return passwordCharacters.join("");
};

// event listener to copy password 
 
copybutton.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      const passwordToCopy = res.innerText;
      // in case password is empty
      if (!passwordToCopy) return;
      
      textarea.value = passwordToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      alert("Password have been copied");
});

// Checking the options that are selected and setting the password
form.addEventListener("submit", (e) => {
      e.preventDefault();
      const characterAmount = size.value;
      const includeUppercase = upperCase.checked;
      const includeNumbers = number.checked;
      const password = generatePassword(
        characterAmount,
        includeUppercase,
        includeNumbers,
    
      );
      res.innerText = password;
    });