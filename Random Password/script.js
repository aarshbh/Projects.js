const button = document.getElementById("button");

button.addEventListener("click", function createPassword() {
  // console.log("Active ");
  const passwordBox = document.getElementById("Password");
  const length = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = '!@#$%^&*()<>?:{}[],."~`/';

  const allChars = upperCase + lowerCase + number + symbol;
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }

  passwordBox.value = password;

  const copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", function () {
    passwordBox.select();
    document.execCommand("copy");
  });
});
