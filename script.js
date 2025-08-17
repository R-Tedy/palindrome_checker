const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  palindrome = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").reverse().join("");
  sentPali = palindrome.split(" ").join("");
  paliFilter = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").join("");
  sentFilt = paliFilter.split(" ").join("");
  paliArrSingle = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").length === 1;

  if (textInput.value === "") {
    alert("Please input a value")
  } else if (paliFilter === palindrome || paliArrSingle || sentFilt === sentPali) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});