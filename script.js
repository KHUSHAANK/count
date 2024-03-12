const counterEl = document.getElementById('counter');
let count = 0;  // Initial count set to 0

const incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
});

const decrementBtn = document.getElementById('decrement');
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
  }
  counterEl.textContent = count;
});

const setStartingValueBtn = document.getElementById('setStartingValue');
setStartingValueBtn.addEventListener('click', () => {
  const newStartingValue = parseInt(document.getElementById('initialValue').value);
  if (!isNaN(newStartingValue)) {
    count = newStartingValue;
    counterEl.textContent = count;
  } else {
    alert("Please enter a valid number");
  }
});
