"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValidity(firstName);
  checkValidity(lastName);
  checkValidityEmail(email);
  checkValidity(password);
});

function checkValidity(input) {
  if (input.value === "") {
    input.closest(".input-unit").classList.add("error");
    setTimeout(() => {
      input.closest(".input-unit").classList.remove("error");
    }, 1500);
  } else {
    input.closest(".input-unit").classList.add("success");
  }
}

function checkValidityEmail(input) {
  if (input.value === "") {
    input.closest(".input-unit").classList.add("error");
    setTimeout(() => {
      input.closest(".input-unit").classList.remove("error");
    }, 1500);
  } else if (!isEmail(input.value)) {
    input.parentNode.querySelector("small").innerHTML =
      "<p>Email is not in valid format</p>";
    input.closest(".input-unit").classList.add("error");
    setTimeout(() => {
      input.closest(".input-unit").classList.remove("error");
      input.value = "";
    }, 1500);
  } else {
    input.closest(".input-unit").classList.add("success");
  }
}

function isEmail(email) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
