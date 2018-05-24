// variables
const sendBtn = document.getElementById("sendBtn"),
  message = document.getElementById("message"),
  subject = document.getElementById("subject"),
  email = document.getElementById("email"),
  resetBtn = document.getElementById("resetBtn"),
  sendEmailForm = document.getElementById("email-form");

// event listeners
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", appInit);

  //   validating the form
  message.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  email.addEventListener("blur", validateField);

  //   reseting the form
  resetBtn.addEventListener("click", resetForm);
}

// functions

// app initialization
function appInit() {
  // disable the send button on load
  sendBtn.disabled = true;
}

// validating the fields
function validateField() {
  let errors;

  // validating the length of the field
  //   console.log(this);
  console.log(validateLength(this));

  //   validating the email
  if (this.type === "email") {
    validateEmail(this);
  }

  // check the errors
  errors = document.querySelectorAll(".error");

  //   checking that the inputs are not empty
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (errors.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

// validating the length of the fields
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// validating the email (checking the @)
function validateEmail(field) {
  let emailText = field.value;
  if (emailText.indexOf("@") !== -1 && emailText.indexOf(".") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// reseting the form
function resetForm() {
  sendEmailForm.reset();
}
