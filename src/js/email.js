const encodedEmail = "aW5mb0BwZWN1bGlhcmR5bmFtaWNzLmNvLnVr";
const emails = document.querySelectorAll(".email-link");

// console.log(emails);

emails.forEach((e) => {
  e.setAttribute(
    "href",
    "mailto:".concat(atob(encodedEmail)).concat("?subject=Portfolio Query")
  );
});
