const encodedEmail = "aW5mb0BwZWN1bGlhcmR5bmFtaWNzLmNvLnVr";

const form = document.getElementById("email-link");
form.setAttribute(
  "href",
  "mailto:".concat(atob(encodedEmail)).concat("?subject=Portfolio Query")
);
