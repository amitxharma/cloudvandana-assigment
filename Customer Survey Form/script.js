function submitForm() {
  // Check if any required field is empty
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const country = document.getElementById("country").value;
  const genderElements = document.querySelectorAll(
    'input[name="gender"]:checked'
  );
  const gender = [...genderElements].map((el) => el.value).join(", ");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobile-number").value;

  if (
    firstName === "" ||
    lastName === "" ||
    dateOfBirth === "" ||
    country === "" ||
    gender === "" ||
    profession === "" ||
    email === "" ||
    mobileNumber === ""
  ) {
    alert("Please fill in all required fields.");
  } else {
    // All fields are filled, proceed to submit the form
    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dateOfBirth}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobileNumber}`;
    alert(message);
    document.getElementById("survey-form").reset();
  }
}

function resetForm() {
  document.getElementById("survey-form").reset();
}
