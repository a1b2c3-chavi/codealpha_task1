function calculateAge() {
  const dob = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  if (!dob) {
    errorDiv.innerHTML = "Please select your date of birth.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    errorDiv.innerHTML = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerHTML = `🎉 Your Age: <strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days`;
}
