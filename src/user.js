import { requestUserInfo } from "./api.js";
import { getCookie, deleteCookie } from "./cookie.js";

window.addEventListener("DOMContentLoaded", async () => {
  const { accessToken, userId } = JSON.parse(getCookie("user"));
  const { email, name } = await requestUserInfo(accessToken, userId);
  document.getElementById("user-name").textContent = name;
  document.getElementById("user-email").textContent = email;
});

document.getElementById("logout-button").addEventListener("click", () => {
  deleteCookie("user");
  location.href = "/index.html";
});
