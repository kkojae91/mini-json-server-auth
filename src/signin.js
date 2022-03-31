import { requestSignin } from "./api.js";
import { setCookie } from "./cookie.js";

document
  .getElementById("signin-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    try {
      const { accessToken, user } = await requestSignin(email, password);

      setCookie(
        "user",
        JSON.stringify({
          userId: user.id,
          accessToken,
        }),
        { "max-age": 3600 }
      );
      location.href = "/index.html";
    } catch ({ message }) {
      alert(message);
    }
  });
