const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const palindrome = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").reverse().join("");
  const sentPali = palindrome.split(" ").join("");
  const paliFilter = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").join("");
  const sentFilt = paliFilter.split(" ").join("");
  const paliArrSingle = textInput.value.trim().replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").length === 1;

  if (textInput.value === "") {
    alert("Please input a value")
  } else if (paliFilter === palindrome || paliArrSingle || sentFilt === sentPali) {
    result.innerText = `${textInput.value} is a palindrome`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
});