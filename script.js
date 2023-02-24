const button = document.querySelector(".button");
const amount = document.querySelector("#paid");
const give = document.querySelector("#give");
const message = document.querySelector(".message");
const notes = document.querySelectorAll(".no-of-notes");
const notesLeft = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
button.addEventListener("click", function checkBill() {
  message.style.display = "none";
  if (amount.value > 0) {
    if (give.value >= amount.value) {
      const amountleft = give.value - amount.value;
        checknotes(amountleft); 
    
    } else {
      showMessage("Amount should atleast be equal to the cash given");
    }
  } else {
    showMessage("Amount should be positive");
  }
});
function showMessage(messages) {
  message.style.display = "block";
  message.innerText = messages;
}
function checknotes(amountleft) {
  for (let i = 0; i < notesLeft.length; i++) {
    const numberOfNotes = Math.trunc(amountleft / notesLeft[i]);
    amountleft %= notesLeft[i];
    notes[i].innerText = numberOfNotes;
  }
}
