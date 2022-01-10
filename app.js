const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#inputName");
const userNameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#inputEmail");
const phoneInput = document.querySelector("#phoneNumber");
const generatebtn = document.querySelector(".passbtn");
const passwordInput = document.querySelector("#inputPassword");

submitBtn.addEventListener("click", (e) => {
  console.log(`click`);
  e.preventDefault();
  verifyInputs();
  submitBtn.disabled = true;
});

function verifyInputs() {
  const name = nameInput.value.trim();
  const userName = userNameInput.value.trim();
  const email = emailInput.value.trim();

  const phone = phoneInput.value.trim();
  validName(name);
  validPhone(phone);
  validEmail(email);
  validUserName(userName);
}

generatebtn.addEventListener("click", (e) => {
  e.preventDefault();
  passInputGenerate();
});
function passInputGenerate() {
  passwordInput.value = randompass();
}

function randompass() {
  let chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz@$#%^&?/.~``";
  const string_length = 8;
  let randomstring = "";
  for (let i = 0; i < string_length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

function validEmail(email) {
  const message = `<small style="color:red">**must contains @ . **</small>`;
  if (/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,3}/.test(email)) {
    emailInput.style.border = "2px solid #4285f4";
  } else {
    emailInput.style.border = "2px solid red";
    emailInput.insertAdjacentHTML("afterend", message);
  }
}

function validPhone(phone) {
  const message = `<small style="color:red">**must be start 01 and length be 11**</small>`;
  if (/\+?(88)?01\d\d{8}/.test(phone)) {
    phoneInput.style.border = "2px solid #4285f4";
  } else {
    phoneInput.style.border = "2px solid red";
    phoneInput.insertAdjacentHTML("afterend", message);
  }
}

function validName(name) {
  const message = `<small style="color:red">**length must be at least 5 or more **</small>`;
  if (/^[a-zA-Z\s]{5,20}$/.test(name)) {
    nameInput.style.border = "2px solid #4285f4";
  } else {
    nameInput.style.border = "2px solid red";
    nameInput.insertAdjacentHTML("afterend", message);
  }
}

function validUserName(userName) {
  const message = `<small style="color:red">**length must be at least 5**</small>`;
  if (/^(?=[a-z_\d]*[a-z])[a-z_\d]{5}$/.test(userName)) {
    userNameInput.style.border = "2px solid #4285f4";
  } else {
    userNameInput.style.border = "2px solid red";
    userNameInput.insertAdjacentHTML("afterend", message);
  }
}
