console.log("Don Arden’s Workshop is live.");

// Kleine eerste interactie: laat zien dat JavaScript gekoppeld is.
const currentYear = new Date().getFullYear();
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent = `© ${currentYear} Don Arden’s Workshop`;
}
