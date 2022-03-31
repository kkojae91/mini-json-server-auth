import { requestRegister } from "./api.js";

document
  .getElementById("signup-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    try {
      await requestRegister(name, password, email);
      location.href = "/signin.html";
    } catch ({ message }) {
      alert(message);
    }
  });
