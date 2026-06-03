const form = document.querySelector("#eventForm");
const typeRange = document.querySelector("#typeRange");
const notesContainer = document.querySelector("#notesContainer");
const notesLabel = document.querySelector('label[for="notes"]');
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = typeRange.value;

  if (value === "student-id") {
    notesContainer.hidden = false;
    notes.required = true;
    notesLabel.textContent = "Student I#";
    notes.placeholder = "Enter 9-digit student number";
  } else if (value === "event-code") {
    notesContainer.hidden = false;
    notes.required = true;
    notesLabel.textContent = "Access Code";
    notes.placeholder = "Enter access code";
  } else {
    notesContainer.hidden = true;
    notes.required = false;
    notes.value = "";
  }
}

typeRange.addEventListener("change", updateNotesField);
updateNotesField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = [];

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.typeRange.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  if (isPastDate(availableDate)) {
    errors.push("Please choose a future event date.");
  }

  // Student validation
  if (type === "student-id") {
    if (!/^\d{9}$/.test(note)) {
      errors.push("Student I# must be 9 digits.");
    }
  }

  // Guest validation
  if (type === "event-code") {
    if (note !== "EVENT131") {
      errors.push("Access Code error: Please enter the correct access code to attend as a guest.");
    }
  }

  // Show errors below the form
  if (errors.length > 0) {
    output.innerHTML = `
      <h2>Errors</h2>
      <ul>
        ${errors.map(error => `<li>${error}</li>`).join("")}
      </ul>
    `;
    return;
  }

  // Successful submit
  output.innerHTML = `
    <h2>Event Ticket</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Date:</strong> ${availableDate}</p>
    <p><strong>Ticket Type:</strong> ${
      type === "student-id" ? "Student" : "Guest"
    }</p>
    <p><strong>Status:</strong> Confirmed</p>
  `;

  form.reset();
  updateNotesField();
});