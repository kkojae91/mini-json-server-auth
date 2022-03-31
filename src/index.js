import { getCookie } from "./cookie.js";

window.addEventListener("DOMContentLoaded", () => {
  const user = getCookie("user") && JSON.parse(getCookie("user"));

  if (!user) return;

  location.href = "/user.html";
});
